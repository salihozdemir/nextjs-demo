import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckoutProduct } from "@/types/index";

type BasketSummaryProps = {
  products: CheckoutProduct[];
};

export const BasketSummary = ({ products }: BasketSummaryProps) => {
  return (
    <div className="w-full flex-shrink-0 md:w-72">
      <div className="border">
        <div className="flex flex-col justify-between">
          <div className="border-b p-4">
            <h2 className="text-xl font-bold">Summary</h2>
          </div>
          <div className="flex flex-auto flex-col gap-2 p-4">
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
            <div className="mt-2 flex justify-between border-t pt-2 font-bold">
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
        <div className="p-4">
          <Button className="w-full" asChild>
            <Link href="/order-success">Checkout</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
