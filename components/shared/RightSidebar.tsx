import { suggestedUsers } from '@/constants';

const RightSidebar = () => {
  return (
    <section className="flex-col col-span-2 border-l-2 dark:border-slate-500 pt-20 dark:bg-[#121417] p-5 hidden xl:inline">
      <div className="flex flex-col gap-4">
        <h3 className="text-lg">Suggested Users</h3>
        {suggestedUsers.map((user, index) => (
          <div key={index} className="flex items-center w-full justify-between">
            <div className="flex space-x-3 items-center cursor-pointer">
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