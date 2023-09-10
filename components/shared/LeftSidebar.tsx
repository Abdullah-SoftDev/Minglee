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

    <section className="flex flex-col col-span-2 border-r-2 dark:border-slate-500 pt-20 max-md:hidden dark:bg-[#121417]">
      <div className="mx-auto">
        {sidebarLinks.map((link) => {
          const isActive = (pathname.includes(link.route) && link.route.length > 1) || pathname === link.route;

          if (link.route === '/profile') link.route = `${link.route}/${userId}`;

          return (
            <Link
              href={link.route}
              key={link.label}
              className={`flex group items-center max-w-fit space-x-2 rounded-full px-4 py-3 transition-all duration-200 hover:bg-gray-100  mb-4 ${isActive && 'text-purple-500'}`}
            >
              <link.icon className="w-6 h-6" />
              <p className="max-lg:hidden group-hover:text-blue-400">{link.label}</p>
            </Link>
          );
        })}
        <div className="rounded-full bg-rose-600 hover:bg-rose-500">
          <SignedIn>
            <SignOutButton signOutCallback={() => router.push('/sign-in')}>
              <div className="flex cursor-pointer space-x-2 px-4 py-3">
                <ArrowLeftOnRectangleIcon className="w-6 h-6" />
                <p className="max-lg:hidden">Logout</p>
              </div>
            </SignOutButton>
          </SignedIn>
        </div>
      </div>
    </section>
  )
}

export default LeftSidebar;