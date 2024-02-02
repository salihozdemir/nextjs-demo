import { cookies } from "next/headers";
import { CheckoutProduct, Product } from "@/types/index";
import { NextResponse } from "next/server";

export async function GET() {
  const cookieStore = cookies();
  const cart = cookieStore.get("basket");

  if (!cart) {
    return NextResponse.json([], {
      status: 200,
    });
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

  return NextResponse.json(basketProducts, {
    status: 200,
  });
}
