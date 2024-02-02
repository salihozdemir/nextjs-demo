import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function OrderSuccess() {
  return (
    <div className="container">
      <div className="flex flex-col items-center gap-4">
        <p>Your order has been placed successfully!</p>

        <div>
          <Button variant="outline" asChild>
            <Link href="/">Continue shopping</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
