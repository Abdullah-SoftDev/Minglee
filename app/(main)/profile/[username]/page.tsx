import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { BriefcaseIcon, CalendarCheck, MapPin } from "lucide-react";
import Link from "next/link";
import { AllTabs } from "../components/AllTabs";
import { BannerUpload } from "../components/BannerUpload";

const ProfilePage = () => {
  return (
    <>
      <div className="relative h-52 bg-cover bg-center border-b-2" style={{ backgroundImage: 'url("https://pbs.twimg.com/profile_banners/1614944002356449282/1675077011/600x200")' }}>
        <div className="w-10 h-10 absolute bottom-4 right-4 backdrop-filter backdrop-blur-lg bg-opacity-50 cursor-pointer rounded-full flex items-center justify-center">
         <BannerUpload />
        </div>
      </div>

      {/* Rest of the profile content */}
      <div className="flex justify-between items-center pt-5">
        <Avatar className="w-36 h-36">
          <AvatarImage src="https://github.com/shadcn.png" alt="profile" />
          <AvatarFallback>Abdullah</AvatarFallback>
        </Avatar>
        <div className="space-x-5">
          <Button>
            Follow
          </Button>
          <Button>
            Edit Profile
          </Button>
        </div>
      </div>

      <div className="pt-5 space-y-3">
        <div className="space-y-1">
          <p className="text-xl font-semibold">Sidd_abdullah</p>
          <p className="dark:text-slate-300 text-slate-500">@Siddabdullah</p>
          <div className="max-w-[300px] lg:max-w-[500px]">
            <Link target="_blank" href={"/"} className="text-blue-400 underline underline-offset-1 overflow-hidden whitespace-nowrap block truncate">
              http://localhost:3000/profile/user_2V5FTbrZDGczfHx2aPmC3QmtLxw
            </Link>
          </div>
        </div>
        <p>👩‍💻 React Developer | Nextjs | Blogger @ DEV Community.</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl">
          <div className="flex items-center">
            <BriefcaseIcon className="w-5 h-5" />
            <p className="ml-2">Student</p>
          </div>

          <div className="flex items-center">
            <MapPin className="w-5 h-5" />
            <p className="ml-2">Delhi, India</p>
          </div>

          <div className="flex items-center">
            <CalendarCheck className="w-5 h-5" />
            <p className="ml-2">Joined January 2023</p>
          </div>
        </div>

        <div className="space-x-3 flex">
          <p>3 Following</p>
          <p>15 Folowers</p>
        </div>
      </div>

      <AllTabs />
    </>
  );
};

export default ProfilePage;