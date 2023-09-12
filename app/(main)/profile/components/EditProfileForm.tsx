"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { UserProfileValidation } from "@/lib/validations/user"
import { UserInfo } from "@/types"
import { Textarea } from "@/components/ui/textarea"

export function EditProfileForm({ userData }: { userData: UserInfo }) {

  const form = useForm<z.infer<typeof UserProfileValidation>>({
    resolver: zodResolver(UserProfileValidation),
    defaultValues: {
      profile_photo: userData.image,
      name: userData.name,
      website: "",
      bio: userData.bio,
      location: "",
    },
  })

  function onSubmit(values: z.infer<typeof UserProfileValidation>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-h-[500px] overflow-auto mr-5 pr-5">
        <FormField
          control={form.control}
          name='profile_photo'
          render={({ field }) => (
            <FormItem className='flex items-center gap-4'>
              <FormLabel className='flex h-24 w-24 items-center justify-center rounded-full'>
                <img
                  src={field.value ?? 'https://th.bing.com/th?id=OIP.kcaJsnMsMsFRdU6d1m2v6AHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2'}
                  alt='profile_icon'
                  width={96}
                  height={96}
                  // priority
                  className='rounded-full object-contain'
                />
              </FormLabel>
              <FormControl className='flex-1 text-gray-200'>
                <Input
                  type='file'
                  accept='img/*'
                  placeholder='Add profile photo'
                  className='outline-none max-w-xs'
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem className='flex w-full flex-col gap-3'>
              <FormLabel>
                Name
              </FormLabel>
              <FormControl>
                <Input
                  type='text'
                  className='focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='website'
          render={({ field }) => (
            <FormItem className='flex w-full flex-col gap-3'>
              <FormLabel>
                Website
              </FormLabel>
              <FormControl>
                <Input
                  type='text'
                  className='focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />


        <FormField
          control={form.control}
          name='bio'
          render={({ field }) => (
            <FormItem className='flex w-full flex-col gap-3'>
              <FormLabel>
                Bio
              </FormLabel>
              <FormControl>
                <Textarea
                  rows={10}
                  className='focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='location'
          render={({ field }) => (
            <FormItem className='flex w-full flex-col gap-3'>
              <FormLabel>
                Location
              </FormLabel>
              <FormControl>
                <Input
                  type='text'
                  className='focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type='submit'>
          Submit
        </Button>
      </form>
    </Form>
  )
}