import Searchbar from "./components/Searchbar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { searchProfile } from "@/constants";

const SearchPage = () => {
  return (
    <div className="max-w-xl mx-auto space-y-5">
      <Searchbar />
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
    </div>
  )
}

export default SearchPage