import { SignedIn, SignOutButton } from "@clerk/nextjs";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const Topbar = () => {
  return (
    <nav className="fixed top-0 z-30 flex w-full items-center justify-between px-6 py-4 bg-gray-900">
      <Link href="/" className="flex items-center gap-4">
        <img src="https://www.svgrepo.com/show/475689/twitter-color.svg" alt="logo" width={28} height={28} />
        <p className="max-xs:hidden text-white">Minglee</p>
      </Link>

      <div className="flex items-center gap-1">
        <div className="block md:hidden">
          <SignedIn>
            <SignOutButton>
              <div className="flex cursor-pointer">
              <ArrowLeftOnRectangleIcon
                  className="text-white w-6 h-6"
                />
              </div>
            </SignOutButton>
          </SignedIn>
        </div>
      </div>
    </nav>
  )
}

export default Topbar;