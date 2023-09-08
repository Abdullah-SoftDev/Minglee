"use client"

import { sidebarLinks } from "@/constants";
import Link from "next/link";
import { usePathname, useRouter } from 'next/navigation';
import { SignedIn, SignOutButton, useAuth } from "@clerk/nextjs";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/20/solid";

function LeftSidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const { userId } = useAuth();

  return (
    <section className="custom-scrollbar sticky left-0 top-0 z-20 flex h-screen w-fit flex-col justify-between overflow-auto border-r pb-5 pt-16 max-md:hidden bg-gray-900">
      <div className="flex w-full flex-1 flex-col gap-4 px-6">
        {sidebarLinks.map((link) => {
          const isActive = (pathname.includes(link.route) && link.route.length > 1) || pathname === link.route;

          if(link.route === '/profile') link.route = `${link.route}/${userId}`

          return (
            <Link 
              href={link.route}
              key={link.label}
              className={`relative flex justify-start gap-4 rounded-lg p-4 ${isActive && 'bg-purple-500'}`}
            >
              
              <link.icon
                className="text-white w-6 h-6"
              />

              <p className="max-lg:hidden text-white">{link.label}</p>
            </Link>
          )}
        )}
      </div>

      <div className="mt-10 px-6">
        <div className="rounded-md bg-rose-600 hover:bg-rose-500">
      <SignedIn>
        <SignOutButton signOutCallback={() => router.push('/sign-in')}>
          <div className="flex cursor-pointer gap-4 p-4">
            <ArrowLeftOnRectangleIcon className="text-white w-6 h-6" />
            <p className="max-lg:hidden text-white">Logout</p>
          </div>
        </SignOutButton>
      </SignedIn>
    </div>
    </div>
    </section>
  )
}

export default LeftSidebar;