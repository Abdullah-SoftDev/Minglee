import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import UploadImageInput from "./UploadImageInput"

export function EditProfile() {

    return (
        <Dialog>
            <DialogTrigger asChild>
            <Button>
            Edit Profile
          </Button>
        </DialogTrigger>
            <DialogContent className="max-w-[360px] sm:max-w-xl md:max-w-2xl">
                <DialogHeader>
                    <DialogTitle>Upload Banner</DialogTitle>
                </DialogHeader>
                <UploadImageInput />
                <DialogFooter>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}