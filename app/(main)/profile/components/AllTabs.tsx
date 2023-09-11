import PostCard from "@/components/PostCard"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { fakeCardData, searchProfile } from "@/constants"

export function AllTabs() {
  return (
    <Tabs defaultValue="posts" className="pt-10">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="posts">Posts</TabsTrigger>
        <TabsTrigger value="follow">Follow</TabsTrigger>
        <TabsTrigger value="following">Following</TabsTrigger>
      </TabsList>
      <TabsContent value="posts">
      <div className="space-y-5">
      {fakeCardData.map((data) => <PostCard key={data.id} data={data}/>
      )}
      </div>
      </TabsContent>
      <TabsContent value="follow">
      <div className="space-y-5">
        {searchProfile.map((user) => (
          <div key={user.id} className="flex justify-between items-center">
            <div className="flex space-x-3">
              <Avatar className="w-12 h-12">
                <AvatarImage src={user.avatarSrc} alt={user.name} />
                <AvatarFallback>{user.username}</AvatarFallback>
              </Avatar>
              <div>
                <p>{user.name}</p>
                <p>@{user.username}</p>
              </div>
            </div>
            <Button>
              Unfollow
            </Button>
          </div>
        ))}
      </div>
      </TabsContent>
      <TabsContent value="following">
      <div className="space-y-5">
        {searchProfile.map((user) => (
          <div key={user.id} className="flex justify-between items-center">
            <div className="flex space-x-3">
              <Avatar className="w-12 h-12">
                <AvatarImage src={user.avatarSrc} alt={user.name} />
                <AvatarFallback>{user.username}</AvatarFallback>
              </Avatar>
              <div>
                <p>{user.name}</p>
                <p>@{user.username}</p>
              </div>
            </div>
            <Button>
              View Profile
            </Button>
          </div>
        ))}
      </div>
      </TabsContent>
    </Tabs>
  )
}