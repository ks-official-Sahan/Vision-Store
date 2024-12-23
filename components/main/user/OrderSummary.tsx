const OrderSummary = ({
  currency,
  total,
  shipping,
}: {
  currency: string;
  total: number;
  shipping: number;
}) => {
  return (
    <div className="w-[364px] sm:w-full rounded-[24px] border border-[#0000001f] bg-black/5 dark:bg-white/5 shadow-sm">
      <div className="w-full border-b border-[#0000001f] px-[26px] py-[20px]">
        <div className="text-[1.5rem] font-semibold">Your Order</div>
        <div className="font-medium opacity-65 pt-[5px]">Items</div>
      </div>
      <div className="px-[26px] py-[20px] gap-[16px] flex flex-col">
        <div className="flex justify-between items-center">
          <span>Subtotal:</span>
          <span>
            {currency} {total.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span>Shipping:</span>
          <span>
            {currency} {shipping.toFixed(2)}
          </span>
        </div>
      </div>
      <div className="w-full border-t border-[#0000001f] px-[26px] py-[20px] flex justify-between items-center">
        <span>Total:</span>
        <span className="text-[24px]">
          {currency} {(total + shipping).toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default OrderSummary;
