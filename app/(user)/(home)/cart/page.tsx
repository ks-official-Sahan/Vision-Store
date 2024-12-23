"use client";
import PathNav from "@/components/main/admin/PathNav";
import CustomButton from "@/components/main/CustomButton";
import Loading from "@/components/main/Loading";
import QuantitySelector from "@/components/main/user/QuantitySelector";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { routes } from "@/data";
import { isUserAvailable } from "@/lib/actions/fetch/auth";
import { fetchCartItems, processToCheckout } from "@/lib/actions/fetch/product";
import { CURRENCY, IMAGE_PATH, RESULT } from "@/lib/api";
import { TrashIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Cart() {
  const router = useRouter();

  const [total, setTotal] = useState(0.0);
  const [currency, setCurrency] = useState(CURRENCY);
  const [isLoading, setIsLoading] = useState(true);
  const [getUser, setUser] = useState<any>(null);

  const [fetchedCart, setFetchedCart] = useState<any[]>([]);
  const [cartItems, setCartItems] = useState<any[]>([]);

  useEffect(() => {
    let value = 0.0;
    cartItems.forEach(
      (cart) => (value += parseFloat(cart.price) * parseInt(cart.qty))
    );
    setTotal(value);
  }, [cartItems]);

  useEffect(() => {
    setCartItems(fetchedCart);
  }, [fetchedCart]);

  // const [isUser, setIsUser] = useState<boolean>(false);
  // const [user, setUser] = useState(null);
  const getData = async () => {
    // isUserAvailable(true).then((res) => {
    //   // setIsUser(res);
    //   console.log(res);
    //   setUser(res);
    // });
    const user = await isUserAvailable(true);
    setUser(user);
    // fetchCart(user);
  };

  /* eslint-disable react-hooks/exhaustive-deps */

  useEffect(() => {
    if (getUser) fetchCart(getUser);
  }, [getUser]);

  useEffect(() => {
    getData();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

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

  const handleQuantityChange = (id: string, newQuantity: number) => {
    const updatedcartItems = cartItems.map((cart) =>
      cart.id === id ? { ...cart, qty: newQuantity } : cart
    );
    setCartItems(updatedcartItems);
  };

  const handleRemove = (id: string) => {
    const filteredcartItems = cartItems.filter((cart) => cart.id !== id);
    setCartItems(filteredcartItems);
  };

  const handleCheckout = async () => {
    if (cartItems.length == 0) return;

    try {
      setIsLoading(true);
      const result = await processToCheckout({
        email: getUser?.email,
        cartItems: cartItems,
      });
      if (result?.status === RESULT.error) return alert("Something Failed");
      if (result?.status === RESULT.message) return alert(result.message);

      if (result?.status === RESULT.success) {
        router.push(routes.CHECKOUT.path);
      }
    } catch (error: Error | any) {
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="w-full flex flex-col min-h-screen">
      <Loading isLoading={isLoading} />

      <div className="w-full flex flex-col gap-2">
        <PathNav data={[routes.CART]} />
        <div className="flex box-border border-b-2 pb-3">
          <span className="text-4xl font-semibold">Cart</span>
        </div>

        <div className="flex flex-col w-full gap-4">
          <span className="text-[24px] font-semibold">Order Your Items</span>

          <Table className="w-full">
            <TableCaption>
              A list of current {routes.CART?.title} items.
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead className="text-center">Quantity</TableHead>
                <TableHead>Price</TableHead>
                <TableHead className="text-right">Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cartItems.length > 0 ? (
                <>
                  {cartItems.map((cart: any) => (
                    <TableRow key={cart.id} className="h-24">
                      <TableCell className="font-medium">{cart.id}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-6 p-2 flex-wrap rounded-2xl">
                          <Image
                            alt={"cart Image"}
                            src={`${IMAGE_PATH}${cart.itemImagePath}`}
                            width={90}
                            height={90}
                            className="object-cover object-center w-[90px] h-[90px] rounded-xl p-1 border border-2"
                          />
                          {cart.itemName}
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <div className="flex-center gap-3">
                          <QuantitySelector
                            getItemQty={cart.itemQty}
                            getQty={cart.qty}
                            setQty={(qty: number) =>
                              handleQuantityChange(cart.id, qty)
                            }
                          />
                          <Button
                            className="h-10 w-10 border border-2 border-gray-500 flex-center hover:bg-gray-500 rounded-full"
                            onClick={() => handleRemove(cart.id)}
                          >
                            <TrashIcon size={25} color="red" />
                          </Button>
                        </div>
                      </TableCell>
                      <TableCell>{`${currency} ${cart.price.toFixed(
                        2
                      )}`}</TableCell>
                      <TableCell className="text-right">{`${currency} ${(
                        parseFloat(cart.price) * cart.qty
                      ).toFixed(2)}`}</TableCell>
                    </TableRow>
                  ))}
                </>
              ) : (
                <>
                  <TableRow className="h-60">
                    <TableCell colSpan={5}>
                      <div className="flex justify-center items-center text-center text-2xl hero-heading py-10 px-5">
                        Your Cart is Empty
                      </div>
                    </TableCell>
                  </TableRow>
                </>
              )}
            </TableBody>
            <TableFooter>
              <TableRow className="h-12">
                <TableCell colSpan={4} className="text-lg">
                  Total
                </TableCell>
                <TableCell className="text-right text-lg">{`${currency} ${total.toFixed(
                  2
                )}`}</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>

        <div className="flex justify-between items-center mt-10 py-5 px-3 gap-[10px] border-t-2 flex-wrap">
          <span className="text-3xl font-robert-medium lg:w-1/4 md:w-1/2 sm:w-full">
            Summary
          </span>
          <div className="w-2/5 lg:w-1/4 sm:w-full flex flex-col flex-wrap gap-2">
            <div className="flex justify-between items-center">
              <span className="text-[16px] font-medium">Quantity</span>
              <span className="text-[16px] font-medium">
                {cartItems.length} Items
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold">Total</span>
              <span className="text-2xl text-right font-bold">
                {currency} {total.toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        <CustomButton handlePress={() => handleCheckout()} title="Checkout" />
      </div>
    </section>
  );
}
