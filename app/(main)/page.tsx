import { redirect } from "next/navigation";

const HomePage = async () => {
  const userInfo = true;
  if (!userInfo) redirect("/onBoarding");

  return (
    <>
      <h1 className="font-medium text-2xl">Home</h1>
    </>
  )
}

export default HomePage