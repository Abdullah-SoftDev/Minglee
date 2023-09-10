"use client";

import { MessageCircle } from "lucide-react";
import { Drawer } from "vaul";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { CommentValidation } from "@/lib/validations/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { fakeComments } from "@/constants";

export function CommentScreen() {
  const form = useForm<z.infer<typeof CommentValidation>>({
    resolver: zodResolver(CommentValidation),
    defaultValues: {
      comment: "",
    },
  });

  function onSubmit(values: z.infer<typeof CommentValidation>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>
        <button>
          <div className="flex items-center">
            <MessageCircle className="w-5 h-5 cursor-pointer" />
            <span className="ml-2">999</span>
          </div>
        </button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0" />
        <Drawer.Content className="dark:bg-[#121417] bg-white flex flex-col fixed bottom-0 left-0 right-0 max-h-[80%] h-[80%] md:max-h-[80%] rounded-t-[10px] z-30">
          <section className="max-w-3xl w-full mx-auto flex flex-col overflow-auto px-4 py-8">
            {/* Comment box */}
            <div className="flex space-x-3">
              <Avatar>
                <AvatarImage
                  src="https://yt3.ggpht.com/ytc/AOPolaT7_E1QM4mvTNSWtPBHMMDw_-zILhgK-fjaPfdBZA=s48-c-k-c0x00ffffff-no-rj"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Form {...form}>
                <form className="w-full" onSubmit={form.handleSubmit(onSubmit)}>
                  <FormField
                    control={form.control}
                    name="comment"
                    render={({ field }) => (
                      <FormItem className="flex w-full flex-col gap-3">
                        <FormControl className="no-focus border border-dark-4 bg-dark-3 text-light-1">
                          <Input
                            {...field}
                            id="name"
                            placeholder="Write a beautiful comment!!"
                            className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 border-b border-slate-300 dark:border-slate-500"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="pt-2 justify-end flex">
                    <Button className="font-semibold text-lg rounded-md">
                      Post
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
            {/* All shown comments */}
            <div className="space-y-10 pt-6">
              {fakeComments.map((data, index) => (
                <div key={index} className="flex space-x-3">
                  <Avatar>
                    <AvatarImage src={data.avatarSrc} alt={data.username} />
                    <AvatarFallback>{data.avatarFallback}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex space-x-3">
                      <p>@{data.username}</p>
                      <p>{data.timestamp}</p>
                    </div>
                    <p>{data.comment}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}