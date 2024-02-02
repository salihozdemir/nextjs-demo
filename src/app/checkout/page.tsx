import { cookies } from "next/headers";
import { Product, CheckoutProduct } from "@/types/index";
import { CheckoutContent } from "@/components/checkout-content";

async function getBasketProducts() {
  const cookieStore = cookies();
  const cart = cookieStore.get("basket");

  if (!cart) {
    return [];
  }

  const res = await fetch(
    "https://web-production-362f8.up.railway.app/api/v1/products",
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const products = (await res.json()) as Product[];
  const cartValue = JSON.parse(cart.value) as {
    productId: number;
    quantity: number;
  }[];
  const basketProducts: CheckoutProduct[] = products
    .filter((product) =>
      cartValue.some((item) => item.productId === product.id),
    )
    .map((product) => {
      const cartItem = cartValue.find((item) => item.productId === product.id);

      return {
        ...product,
        quantity: cartItem?.quantity || 0,
      };
    });

  return basketProducts;
}

export default async function Checkout() {
  const basketProducts = await getBasketProducts();

  if (basketProducts.length === 0) {
    return (
      <div className="container">
        <p>Your basket is empty.</p>
      </div>
    );
  }

  return (
    <div className="container">
      <CheckoutContent basketProducts={basketProducts} />
    </div>
  );
}
