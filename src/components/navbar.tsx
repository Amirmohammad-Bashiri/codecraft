import Image from "next/image";
import Link from "next/link";

import Logo from "../../public/logo.png";

function Navbar() {
  return (
    <nav className="flex items-center max-h-28 border-b border-b-gray-400 bg-inherit justify-between sm:px-12 px-2 md:px-24">
      <Link href="/" className="flex items-center justify-center">
        <Image
          src={Logo}
          alt="CodeCraft Logo"
          width={150}
          height={150}
          priority
        />
      </Link>
      <div className="flex items-center mr-4 md:mr-0">
        <button className="bg-brand-orange text-white px-3 py-1.5 sm:px-4 md:px-8 md:py-2.5 rounded-md text-sm md:text-base font-semibold hover:text-brand-orange hover:bg-white hover:border-2 hover:border-brand-orange border-2 border-transparent transition duration-300 ease-in-out">
          Sign In
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
