import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { PencilIcon } from "lucide-react"
import UploadImageInput from "./UploadImageInput"

export function BannerUpload() {

    return (
        <Dialog>
            <DialogTrigger asChild>
                <PencilIcon className="w-5 h-5 dark:text-black" />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] max-w-[360px]">
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