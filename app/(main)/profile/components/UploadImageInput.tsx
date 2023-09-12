'use client'

import { Input } from "@/components/ui/input"
import { useState } from "react";
import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"

const UploadImageInput = () => {
    const [image, setImage] = useState<string>("");

    const handelSelectImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const reader = new FileReader();

        if (e.target.files && e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }

        reader.onload = (readerEvent) => {
            const result = readerEvent?.target?.result;
            if (typeof result === "string") {
                setImage(result);
            }
        }
    }

    return (
        <>
            <div className="py-4">
                <Input
                    onChange={handelSelectImage}
                    type='file'
                    accept='img/*'
                    placeholder='Add Banner Image'
                    className='outline-none max-w-xs'
                />
            </div>
            {image && (
                <AspectRatio ratio={16 / 9} className="bg-muted relative">
                    <Image
                        src={image}
                        alt="Photo by Drew Beamer"
                        onClick={() => { setImage("") }}
                        fill
                        className="rounded-md object-cover cursor-pointer" />
                </AspectRatio>
            )}
        </>
    )
}

export default UploadImageInput