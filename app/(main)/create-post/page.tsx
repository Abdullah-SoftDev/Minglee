import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import PhotoIconButton from "@/components/CreatePost/PhotoIconButton"
import VedioIconButton from "@/components/CreatePost/VideoIconButton"

const page = () => {
    return (
            <Card className="w-full max-w-3xl mx-auto">
                <CardHeader>
                    <CardTitle>Create Post</CardTitle>
                    <CardDescription>Upload Carefully. Your posts are publicly available.</CardDescription>
                </CardHeader>

                <Avatar className="m-6">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Input id="name" placeholder="what is happening!" className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 h-16 placeholder:text-xl text-xl" />
                            </div>
                        </div>
                    </form>
                    <hr className="dark:border-gray-500 mt-5 border-gray-300" />
                </CardContent>

                <CardFooter className="flex justify-between">
                    <div className="space-x-4 flex">
                        <PhotoIconButton />
                        <VedioIconButton />
                    </div>
                    <Button className="font-semibold text-lg">Post</Button>
                </CardFooter>
            </Card>
    )
}

export default page