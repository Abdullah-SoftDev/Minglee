import { suggestedUsers } from '@/constants';

const RightSidebar = () => {
  return (
    <section className="bg-gray-900 custom-scrollbar sticky right-0 top-0 z-20 flex flex-col justify-between h-screen w-fit overflow-auto border-l px-10 pt-16 pb-6 max-xl:hidden">
    <div className="flex flex-col gap-4">
      <h3 className="text-white text-lg font-semibold">Suggested Users</h3>
      {suggestedUsers.map((user, index) => (
        <div key={index} className="flex items-center space-x-2 text-white cursor-pointer">
          <img
            src={user.imageUrl}
            alt={user.name}
            className="w-8 h-8 rounded-full"
          />
          <span className="text-sm">{user.name}</span>
        </div>
      ))}
    </div>
  </section>
  );
};

export default RightSidebar;