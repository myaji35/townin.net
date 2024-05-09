import Link from "next/link";
import Image from "next/image"; // Import the Image component from the "next/image" library.

export function Navbar() {
  return (
    <nav className="w-full border-b">
        <div className="flex items-center justify-between container mx-auto ps-5 lg:px-10 py-5">
          <Link href="/">
            <Image /> {/* Use the Image component as a JSX element. */}
              <img src="" alt="" />
          </Link>
        </div>
        <h1>hello navbar</h1>
    </nav>);
}