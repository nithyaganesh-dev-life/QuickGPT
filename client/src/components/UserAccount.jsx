import { assets } from "../assets/assets";
const UserAccount = ({ user }) => {
  return (
    <div className="flex items-center gap-3 p-3 mt-4 border border-gray-300 dark:border-white/15 rounded-md cursor-pointer group">
      <img className="w-7 rounded-full" src={assets.user_icon} alt="User" />
      <p className="flex-1 text-sm dark:text-primary truncate">
        {user ? user.name : "Login your account"}
      </p>
      {user && (
        <img
          className="h-5 cursor-pointer hidden not-dark:invert group-hover:block"
          src={assets.logout_icon}
        />
      )}
    </div>
  );
};

export default UserAccount;
