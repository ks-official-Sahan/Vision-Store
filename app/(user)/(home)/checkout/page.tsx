"use client";

import CustomButton from "@/components/main/CustomButton";
import ErrorComponent from "@/components/main/ErrorComponent";
import InputField from "@/components/main/InputField";
import Loading from "@/components/main/Loading";
import SelectField from "@/components/main/SelectField";
import CheckoutItem from "@/components/main/user/CheckoutItem";
import OrderSummary from "@/components/main/user/OrderSummary";
import { routes } from "@/data";
import { isUserAvailable } from "@/lib/actions/fetch/auth";
import {
  fetchAddress,
  fetchCartItems,
  fetchCities,
  processCheckout,
} from "@/lib/actions/fetch/product";
import {
  validateAvailability,
  validateEmail,
  validateSelection,
} from "@/lib/actions/validations/validate";
import { CURRENCY, RESULT } from "@/lib/api";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface CheckoutFormPropsErrors {
  email: string | null | undefined;
  firstName: string | null | undefined;
  lastName: string | null | undefined;
  line1: string | null | undefined;
  line2: string | null | undefined;
  cityId: string | null | undefined;
  postalCode: string | null | undefined;
  mobileNumber: string | null | undefined;
}
export interface CheckoutFormProps {
  firstName: string;
  lastName: string;
  email: string;
  line1: string;
  line2: string;
  cityId: string | number;
  postalCode: string;
  mobileNumber: string;
  isCurrentAddress?: boolean;
  // errors: any | object;
  errors?: CheckoutFormPropsErrors | any;
}

// export type { CheckoutFormProps };

const Checkout = () => {
  const router = useRouter();
  /* eslint-disable react-hooks/exhaustive-deps */

  /* required States */
  const [total, setTotal] = useState(0.0);
  const [shipping, setShipping] = useState(500.0);
  const [currency, setCurrency] = useState(CURRENCY);
  const [isLoading, setIsLoading] = useState(true);
  const [getUser, setUser] = useState(null);

  const [fetchedCart, setFetchedCart] = useState<any[]>([]);
  const [fetchedCities, setFetchedCities] = useState<any[]>([]);
  const [fetchedAddress, setFetchedAddress] = useState<object | any>(null);

  const [form, setForm] = useState<CheckoutFormProps>({
    firstName: "",
    lastName: "",
    email: "",
    line1: "",
    line2: "",
    cityId: "",
    postalCode: "",
    mobileNumber: "",
    isCurrentAddress: false,
    errors: {
      firstName: null,
      lastName: null,
      email: null,
      line1: null,
      line2: null,
      cityId: null,
      postalCode: null,
      mobileNumber: null,
    },
  });

  const [errorMessage, setErrorMessage] = useState<string | undefined>("");

  /* Input & API handling */
  const validateUserData = (
    form: CheckoutFormProps
  ): CheckoutFormPropsErrors => {
    return {
      email: validateEmail(form.email),
      firstName: validateAvailability(form.firstName, "First Name"),
      lastName: validateAvailability(form.lastName, "Last Name"),
      mobileNumber: validateAvailability(form.mobileNumber, "Mobile Number"),
      line1: validateAvailability(form.line1, "Address Line 1"),
      line2: validateAvailability(form.line2, "Address Line 2"),
      cityId: validateSelection(form.cityId, "City"),
      postalCode: validateAvailability(form.postalCode, "Postal Code"),
    };
  };

  const handleCheckout = async () => {
    const errors = validateUserData(form);
    if (Object.values(errors).some((error) => error)) {
      setForm((prevForm) => ({ ...prevForm, errors }));
      return;
    }

    try {
      setIsLoading(true);
      // console.log(form);

      const result = await processCheckout(form);
      if (result?.status === RESULT.error)
        return setErrorMessage("Something Failed");
      if (result?.status === RESULT.message)
        return setErrorMessage(result?.message);

      if (result?.status === RESULT.data) {
        // router.replace(
        //   `${routes.CHECKOUT_COMPLETE.path}?orderId=${result.data.order_id}`
        // );
        console.log(result.data);

        const paymentData = result.data;

        // PayHere payment initialization
        payhere.startPayment(paymentData);

        // Listen for payment completion
        payhere.onCompleted = (orderId) => {
          console.log("Payment completed. OrderID:", orderId);
          router.replace(`${routes.CHECKOUT_COMPLETE.path}?orderId=${orderId}`);
        };

        // Listen for payment dismissal
        payhere.onDismissed = () => {
          console.log("Payment dismissed");
          alert("Payment process was canceled.");
        };

        // Listen for errors
        payhere.onError = (error) => {
          console.error("Payment error:", error);
          alert("Payment process encountered an error.");
        };
      } else if (result?.status === RESULT.success) {
        router.replace(routes.CHECKOUT_COMPLETE.path);
      }
    } catch (error: Error | any) {
      alert(`Something went wrong: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  /* Data Retrieval */
  const getData = async () => {
    const user = await isUserAvailable(true);
    setUser(user);
    await getCites();
  };

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    getData();
    const script = document.createElement("script");
    script.src = "https://www.payhere.lk/lib/payhere.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    if (getUser) {
      fetchCart(getUser);
      getAddress(getUser);
      setForm({
        ...form,
        email: getUser.email,
      });
    }
  }, [getUser]);

  useEffect(() => {
    let value = 0.0;
    fetchedCart.forEach(
      (cart: any) => (value += parseFloat(cart.price) * parseInt(cart.qty))
    );
    setTotal(value);
  }, [fetchedCart]);

  useEffect(() => {
    if (fetchedAddress) {
      setForm({
        ...form,
        firstName: fetchedAddress.firstName,
        lastName: fetchedAddress.lastName,
        line1: fetchedAddress.line1,
        line2: fetchedAddress.line2,
        cityId: fetchedAddress.cityId,
        postalCode: fetchedAddress.postalCode,
        mobileNumber: fetchedAddress.mobileNumber,
        isCurrentAddress: true,
      });
    }
  }, [fetchedAddress]);

  const fetchCart = async (user?: any) => {
    try {
      setIsLoading(true);
      const result = await fetchCartItems(user ? user.email : "");
      if (result?.status === RESULT.error) return alert("Something Failed");
      if (result?.status === RESULT.message) return alert(result.message);

      if (result?.status === RESULT.data) {
        const cartItemList = result.data;
        // console.log(cartItemList);
        setFetchedCart([...cartItemList]);
      }
    } catch (error: Error | any) {
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const getCites = async () => {
    try {
      setIsLoading(true);
      const result = await fetchCities();
      if (result?.status === RESULT.error) return alert("Something Failed");
      if (result?.status === RESULT.message) return alert(result.message);

      if (result?.status === RESULT.data) {
        const { cityList } = result.data;
        setFetchedCities([...cityList]);
      }
    } catch (error: Error | any) {
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const getAddress = async (user?: any) => {
    try {
      setIsLoading(true);
      const result = await fetchAddress(user ? user.email : "");
      if (result?.status === RESULT.error) return alert("Something Failed");
      if (result?.status === RESULT.message) return alert(result.message);

      if (result?.status === RESULT.data) {
        const addressResult = result.data;
        // console.log(addressResult);
        setFetchedAddress(addressResult);
      }
    } catch (error: Error | any) {
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full flex justify-between md:flex-wrap sm:flex-wrap min-h-screen">
      <Loading isLoading={isLoading} />
      <div className="w-full flex flex-col items-center h-full border-r border-[#0000001f] justify-center sm:px-[20px] mt-10">
        {/* Order Detail Box */}
        <OrderSummary currency={currency} total={total} shipping={shipping} />

        {/* ITEMS */}
        <div className="w-full sm:max-w-none max-w-[364px] mt-[20px] gap-[10px] flex flex-col">
          {fetchedCart.map((cart: any) => (
            <CheckoutItem
              key={Math.random()}
              name={cart.itemName}
              price={cart.price}
              qty={cart.qty}
              title={cart.itemName}
              itemImagePath={cart.itemImagePath}
            />
          ))}
        </div>
      </div>

      {/* SHIPPING DETAILS */}
      <div className="w-full flex flex-col items-center h-full py-10">
        <div className="w-full max-w-[466px]">
          {/* TITLE */}
          <div className="">
            <div className="text-[20px] font-semibold">Shipping Details</div>
            <div
              className={`font-circular-web font-medium opacity-65 pt-[6px]`}
            >
              Complete your purchase item by providing your Shipping Details
            </div>
          </div>

          <div
            className={`font-circular-web text-[14px] font-medium mt-[30px] space-x-3`}
          >
            <input
              type="checkbox"
              color="warning"
              checked={form.isCurrentAddress}
              onChange={(e) => {
                setForm({ ...form, isCurrentAddress: e.target.checked });
                // e.target.checked && getAddress();
                console.log(form);
              }}
            />
            <span> Same as your current address?</span>
          </div>

          <div className="mt-[30px] w-full flex flex-col gap-[24px]">
            {/* NAME */}
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-6">
              <div>
                <InputField
                  title="First Name"
                  type="text"
                  placeholder="Eon"
                  otherStyle="-mt-4 text-opacity-50"
                  value={form.firstName}
                  handleTextChange={(e) =>
                    setForm({
                      ...form,
                      firstName: e,
                      errors: { ...form.errors, firstName: null },
                    })
                  }
                  required
                  error={form.errors.firstName}
                />
              </div>
              <div>
                <InputField
                  title="Last Name"
                  type="text"
                  placeholder="Dave"
                  otherStyle="-mt-4 text-opacity-50"
                  value={form.lastName}
                  handleTextChange={(e) =>
                    setForm({
                      ...form,
                      lastName: e,
                      errors: { ...form.errors, lastName: null },
                    })
                  }
                  required
                  error={form.errors.lastName}
                />
              </div>
            </div>

            {/* EMAIL */}
            <div>
              <InputField
                title="Email"
                type="email"
                placeholder="you@domain.com"
                otherStyle="-mt-4 text-opacity-50"
                value={form.email}
                handleTextChange={(e) =>
                  setForm({
                    ...form,
                    email: e,
                    errors: { ...form.errors, email: null },
                  })
                }
                required
                error={form.errors.email}
              />
            </div>

            <div>
              <InputField
                title="Address Line 1"
                type="text"
                placeholder="House number and street name"
                otherStyle="-mt-4 text-opacity-50"
                value={form.line1}
                handleTextChange={(e) =>
                  setForm({
                    ...form,
                    line1: e,
                    errors: { ...form.errors, line1: null },
                  })
                }
                required
                error={form.errors.line1}
              />
            </div>

            <div>
              <InputField
                title="Address Line 2"
                type="text"
                placeholder="Apartment, suit, unit, etc. (Optional)"
                otherStyle="-mt-4 text-opacity-50"
                value={form.line2}
                handleTextChange={(e) =>
                  setForm({
                    ...form,
                    line2: e,
                    errors: { ...form.errors, line2: null },
                  })
                }
                required
                error={form.errors.line2}
              />
            </div>

            <div>
              <SelectField
                title="City"
                otherStyle="-mt-4 text-opacity-50"
                data={fetchedCities}
                value={form.cityId}
                handleValueChange={(e) =>
                  setForm({
                    ...form,
                    cityId: e.target.value,
                    errors: { ...form.errors, cityId: null },
                  })
                }
                required
                error={form.errors.cityId}
              />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-1 gap-6">
              <div>
                <InputField
                  title="Postal Code"
                  type="text"
                  placeholder="XXXXX"
                  otherStyle="-mt-4 text-opacity-50"
                  value={form.postalCode}
                  handleTextChange={(e) =>
                    setForm({
                      ...form,
                      postalCode: e,
                      errors: { ...form.errors, postalCode: null },
                    })
                  }
                  required
                  error={form.errors.postalCode}
                />
              </div>
              <div>
                <InputField
                  title="Mobile Number"
                  type="text"
                  placeholder="07X XXX XXXX"
                  otherStyle="-mt-4 text-opacity-50"
                  value={form.mobileNumber}
                  handleTextChange={(e) =>
                    setForm({
                      ...form,
                      mobileNumber: e,
                      errors: { ...form.errors, mobileNumber: null },
                    })
                  }
                  required
                  error={form.errors.mobileNumber}
                />
              </div>
            </div>

            <ErrorComponent
              errorMessage={errorMessage}
              setErrorMessage={setErrorMessage}
            />

            <div className="flex items-center justify-end gap-[20px] pt-[30px]">
              <Link href={"/cart"} className="flex flex-1">
                <CustomButton
                  title="Cancel"
                  variant="flat"
                  className="flex-1"
                />
              </Link>
              {/* <Link href={"/checkout/complete"} className="flex flex-1"> */}
              <CustomButton
                title="Process to Checkout"
                className="flex-1"
                handlePress={handleCheckout}
              />
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
