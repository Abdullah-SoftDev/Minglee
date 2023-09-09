import { SignedIn, SignOutButton } from "@clerk/nextjs";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { ToogleTheme } from "./ToogleTheme";

const Topbar = () => {
  return (
    <nav className="fixed top-0 z-30 bg-white flex w-full items-center justify-between p-4 dark:bg-[#121417]">
      <Link href="/" className="flex items-center gap-4">
        <img src="https://www.svgrepo.com/show/475689/twitter-color.svg" alt="logo" width={28} height={28} />
        <p className="max-xs:hidden">Minglee</p>
      </Link>

      <div className="flex items-center gap-1">
        <ToogleTheme/>
        <div className="block md:hidden">
          <SignedIn>
            <SignOutButton>
              <div className="flex cursor-pointer">
              <ArrowLeftOnRectangleIcon
                  className="w-6 h-6"
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