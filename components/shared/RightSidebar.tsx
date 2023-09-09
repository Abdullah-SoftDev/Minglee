import { suggestedUsers } from '@/constants';

const RightSidebar = () => {
  return (
<section className="dark:bg-[#121417] sticky right-0 top-0 z-20 flex flex-col justify-between h-screen w-fit overflow-auto px-12 pt-20 pb-6 max-xl:hidden border-l-2 dark:border-none">
  <div className="flex flex-col gap-4">
    <h3 className="text-lg font-semibold">Suggested Users</h3>
    {suggestedUsers.map((user, index) => (
      <div key={index} className="flex items-center space-x-5 w-full justify-between">
        <div className='flex space-x-3 items-center cursor-pointer'>
          <img
            src={user.imageUrl}
            alt={user.name}
            className="w-10 h-10 rounded-full"
          />
          <span className="truncate text-sm font-medium">{user.name}</span>
        </div>
        <p className="text-sm text-blue-500 cursor-pointer">Follow</p>
      </div>
    ))}
  </div>
</section>
  );
};

export default RightSidebar;