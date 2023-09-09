import PostCard from "@/components/PostCard";
import { fakeCardData } from "@/constants";
import { redirect } from "next/navigation";

const HomePage = async () => {
  const userInfo = true;
  if (!userInfo) redirect("/onBoarding");

  return (
    <>
      <h1 className="font-medium text-2xl mb-6">Home</h1>
      <div className="space-y-5">
      {fakeCardData.map((data) => <PostCard key={data.id} data={data}/>
      )}
      </div>
    </>
  )
}

export default HomePage