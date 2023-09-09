import { OnBoardingForm } from "@/components/forms/OnBoardingForm"
import { UserInfo } from "@/types";
import { currentUser } from "@clerk/nextjs";

const OnBoardingPage = async () => {
  const user = await currentUser();
  if (!user) return null; // to avoid typescript warnings

  const userData:UserInfo = {
    userId: user.id,
    username: user.username ?? "",
    name: user.firstName ?? "",
    bio: "",
    image: user.imageUrl,
  };

  return (
    <>
      <main className='mx-auto flex max-w-3xl flex-col justify-start'>
      <h1 className='font-semibold text-xl text-white'>Onboarding</h1>
      <p className='mt-3 text-base text-white'>
        Complete your profile now, to use Minglee.
      </p>

      <section className='py-12'>
      <OnBoardingForm userData={userData}/>
      </section>
    </main>
    </>
  )
}

export default OnBoardingPage