import Link from "next/link";
import { ThemeToggle } from "./Themetoggle";
import { Button } from "./ui/button";

export async function Navbar() {

  return (
    <nav className="border-b bg-background h-[10vh] flex items-center">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <h1 className="font-bold text-4xl">
            Town<span className="text-primary">in</span>
          </h1>
        </Link>

        <div className="flex items-center gap-x-5">
          <ThemeToggle />

          <div className="flex items-center gap-x-5">
            <button>Sign In</button>
            <button>Sign Up</button>
          </div>

        </div>
      </div>
    </nav>
  );
}