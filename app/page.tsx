import { redirect } from "next/navigation";

const HomePage = async () => {
  const userInfo = false;
  if (!userInfo) redirect("/onBoarding");

  return (
    <>
      <h1 className="text-white font-medium text-2xl">Home</h1>
    </>
  )
}

export default HomePage