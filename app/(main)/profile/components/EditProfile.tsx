import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import { EditProfileForm } from "./EditProfileForm";
import { currentUser } from "@clerk/nextjs";
import { UserInfo } from "@/types";

export async function EditProfile() {
    const user = await currentUser();
    if (!user) return null; // to avoid typescript warnings
  
    const userData:UserInfo = {
      userId: user.id,
      username: user.username ?? "",
      name: user.firstName ?? "",
      bio: "",
      image: user.imageUrl,
    };
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>
                    Edit Profile
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-[360px] md:max-w-3xl">
                    <EditProfileForm userData={userData}/>
            </DialogContent>
        </Dialog>
    )
}