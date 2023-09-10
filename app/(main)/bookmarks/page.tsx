import PostCard from "@/components/PostCard"
import { fakeCardData } from "@/constants"

const BookMarkPage = () => {
  return (
    <>
    <h1 className="font-medium text-2xl mb-6">My BookMarks</h1>
    <div className="space-y-5">
    {fakeCardData.map((data) => <PostCard key={data.id} data={data}/>
    )}
    </div>
  </>
  )
}

export default BookMarkPage