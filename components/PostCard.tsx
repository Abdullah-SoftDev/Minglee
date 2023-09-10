import * as React from "react"

import {
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/card"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Bookmark, HeartIcon, Share } from "lucide-react"
import { cn } from "@/lib/utils"

const PostCard = ({ data }: any) => {
    return (
        <Card>
            <div className="flex">
                <div className="flex items-center mr-3 cursor-pointer">
                    <Avatar className="m-6">
                        <AvatarImage src={data?.avatarUrl} alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <p className="font-medium -ml-2">{data?.username}</p>
                </div>

                <div className="flex items-center space-x-3 dark:text-slate-300 text-slate-500">
                    <p className="cursor-pointer">{data?.handle}</p>
                    <p>{data?.timestamp}</p>
                </div>
            </div>

            <CardContent>
                {data?.description ?? <p>{data?.description}</p>}
                {data?.imageUrl && <img
                    src={data?.imageUrl}
                    alt="Your Image"
                    className={cn(data?.description && "mt-3", "w-full h-full shadow-sm object-cover rounded-2xl")}
                />}
            </CardContent>

            <CardFooter className="flex justify-between">
                <div className="flex items-center">
                    <HeartIcon className="w-5 h-5 cursor-pointer" />
                    <span className="ml-2">{data?.likeCount}</span>
                </div>
                <Share className="w-5 h-5 cursor-pointer" />
                <Bookmark className="w-5 h-5 cursor-pointer" />
            </CardFooter>
        </Card>
    )
}

export default PostCard