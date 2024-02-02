import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const cart = JSON.stringify(body.cart);

  const cookieStore = cookies();
  cookieStore.set("basket", cart);

  return NextResponse.json(cart, {
    status: 200,
  });
}

export async function GET() {
  const cookieStore = cookies();
  const cartCookie = cookieStore.get("basket");
  const cart = JSON.parse(cartCookie?.value || "[]");

  return NextResponse.json(cart, {
    status: 200,
  });
}
