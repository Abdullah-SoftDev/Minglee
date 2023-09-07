import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs";
import type { User } from "@clerk/nextjs/api";

const HomePage = async () => {
  const user: User | null = await currentUser();
  return (
    <div>
      <UserButton afterSignOutUrl="/"/>
      <div className="bg-white p-4 shadow-md rounded-lg">
      <div className="flex items-center">
        <img
          src={user?.imageUrl}
          alt="Profile"
          className="w-16 h-16 rounded-full mr-4"
        />
        <div>
          <h2 className="text-2xl font-semibold">
            {user?.firstName} {user?.lastName}
          </h2>
          <p className="text-gray-600">{user?.emailAddresses[0].emailAddress}</p>
          <p className="text-gray-600">Phone: {user?.phoneNumbers[0].phoneNumber}</p>
          <p className="text-gray-600">UserId: {user?.id}</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default HomePage