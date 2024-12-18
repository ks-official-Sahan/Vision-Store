import Image from "next/image";

export interface CartItemDTO {
  id: number;
  cartId: number;
  itemd: number;
  itemName: string;
  price: number;
  qty: number;
}

interface props {
  data: CartItemDTO;
}

export default function CartItem({ data }: props) {
  const imagePath = `http://localhost:8080/my-fresh-goods-api/product-images/${data.id}/image1.png`;
  if (data.id == 0) {
    return null;
  } else {
    return (
      <div className=" flex flex-row w-full sm:flex-col rounded-[15px] items-center justify-between  box-border px-[16px] py-[14px] border-zinc-300 border">
        {/* image and name price section */}
        <div className="flex flex-row gap-[15px]">
          {/* image */}
          <div className=" border border-zinc-300 rounded-[15px] h-[80px] w-[80px] flex justify-center items-center">
            <Image src={imagePath} width={60} height={60} alt={""} />
          </div>
          {/* title and price */}
          <div className=" flex flex-col justify-center ">
            <span className=" font-semibold  text-[20px] text-black">
              {data.itemName}
            </span>
            <span className=" font-bold  text-[24px] text-black">
              LKR {data.price}
            </span>
          </div>
        </div>
        {/* button section */}
        <div className=" flex flex-row  items-center gap-[25px]">
          <div className="flex flex-col ">
            <div className=" bg-[#ABFF52] border-[2px] rounded-full box-border p-[15px]">
              <span className=" font-semibold text-black">{data.qty}</span>
            </div>
          </div>

          <div className="flex flex-col ">
            <div className=" bg-[#CDCDCD] border-[2px] flex flex-row  justify-center items-center rounded-full box-border  h-[40px] w-[40px]">
              <span className="font-semibold text-black">X</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
