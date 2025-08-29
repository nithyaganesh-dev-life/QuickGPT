import { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import moment from "moment";
import SearchBox from "./SearchBox";
import RecentChats from "./RecentChats";
import CommunityImages from "./CommunityImages";
import CreditsOption from "./CreditsOption";
import DarkModeToggle from "./DarkModeToggle";
import UserAccount from "./UserAccount";
import CloseIcon from "./CloseIcon";
import Logo from "./Logo";
import NewChatButton from "./NewChatButton";

const Sidebar = ({ isMenuOpen, setIsMenuOpen }) => {
  const { chats, setSelectedChat, theme, setTheme, user, navigate } =
    useAppContext();
  const [search, setSearch] = useState("");

  return (
    <div
      className={`flex flex-col h-screen min-w-72 p-5 dark:bg-gradient-to-b from-[#242124]/30 to-[#000000] border-r border-[#80609F]/30 backdrop-blur-3xl transition-all duration-500 max-md:absolute left-0 z-1 ${
        !isMenuOpen && "max-md:-translate-x-full"
      }`}
    >
      <Logo theme={theme} />

      <NewChatButton />

      <SearchBox search={search} setSearch={setSearch} />

      <RecentChats
        chats={chats}
        navigate={navigate}
        moment={moment}
        setIsMenuOpen={setIsMenuOpen}
        setSelectedChat={setSelectedChat}
        search={search}
      />

      <CommunityImages navigate={navigate} setIsMenuOpen={setIsMenuOpen} />

      <CreditsOption
        user={user}
        navigate={navigate}
        setIsMenuOpen={setIsMenuOpen}
      />

      <DarkModeToggle theme={theme} setTheme={setTheme} />

      <UserAccount user={user} />

      <CloseIcon setIsMenuOpen={setIsMenuOpen} />
    </div>
  );
};

export default Sidebar;
