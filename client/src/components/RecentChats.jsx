import { assets } from "../assets/assets";

const RecentChats = ({
  chats,
  navigate,
  setSelectedChat,
  setIsMenuOpen,
  moment,
  search,
}) => {
  return (
    <>
      {chats.length > 0 && <p className="mt-4 text-sm">Recent Chats</p>}
      <div className="flex-1 overflow-y-scroll mt-3 text-sm space-y-3">
        {chats
          .filter((chat) =>
            chat.messages[0]
              ? chat.messages[0]?.content
                  .toLowerCase()
                  .includes(search.toLowerCase())
              : chat.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((chat) => (
            <div
              className="p-2 px-4 dark:bg-[#57317C]/10 border border-gray-300 dark:border-[#80609F]/15 rounded-md cursor-pointer flex justify-between group"
              key={chat._id}
              onClick={() => {
                setSelectedChat(chat);
                setIsMenuOpen(false);
                navigate("/");
              }}
            >
              <div>
                <p className="truncate w-full">
                  {chat.messages.length > 0
                    ? chat.messages[0].content.slice(0, 32)
                    : chat.name}
                </p>
                <p className="text-xs text-gray-500 dark:text-[#B1A6C0]">
                  {moment(chat.updatedAt).fromNow()}
                </p>
              </div>
              <img
                className="hidden group-hover:block w-4 cursor-pointer not-dark:invert"
                src={assets.bin_icon}
                alt="Bin"
              />
            </div>
          ))}
      </div>
    </>
  );
};

export default RecentChats;
