import { CheckoutProduct } from "@/types/index";

type BasketSummaryProps = {
  products: CheckoutProduct[];
};

export const BasketSummary = ({ products }: BasketSummaryProps) => {
  return (
    <div className="w-72 flex-shrink-0 border">
      <div className="border-b p-4">
        <h2 className="text-xl font-bold">Summary</h2>
      </div>
      <div className="flex flex-auto flex-col p-4">
        <div className="flex justify-between">
          <div>Subtotal</div>
          <div>
            $
            {products.reduce(
              (acc, product) => acc + product.price * product.quantity,
              0,
            )}
          </div>
        </div>
        <div className="flex justify-between">
          <div>Shipping</div>
          <div>${products.length * 2}</div>
        </div>
        <div className="flex justify-between font-bold">
          <div>Total</div>
          <div>
            $
            {products.reduce(
              (acc, product) => acc + product.price * product.quantity,
              0,
            ) +
              products.length * 2}
          </div>
        </div>
      </div>
    </div>
  );
};
