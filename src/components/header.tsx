import Link from "next/link";
import { BackpackIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";

export const Header = () => {
  return (
    <nav className="sticky top-0 z-10 h-16 border-b bg-background px-4">
      <div className="container flex h-full items-center justify-between">
        <Link href="/">
          <h3 className="text-2xl font-bold">Ecommerce</h3>
        </Link>
        <Button variant="outline" size="icon">
          <BackpackIcon className="h-4 w-4" />
        </Button>
      </div>
    </nav>
  );
};
