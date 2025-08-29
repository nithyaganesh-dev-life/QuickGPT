import { assets } from "../assets/assets";

const DarkModeToggle = ({ theme, setTheme }) => {
  return (
    <div className="flex items-center justify-between gap-2 p-3 mt-4 border border-gray-300 dark:border-white/15 rounded-md">
      <div className="flex items-center gap-2 text-sm">
        <img
          className="w-4 not-dark:invert"
          src={assets.theme_icon}
          alt="Theme"
        />
        <p>Dark Mode</p>
      </div>
      <label className="relative inline-flex cursor-pointer">
        <input
          className="sr-only peer"
          onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
          type="checkbox"
          checked={theme === "dark"}
        />
        <div className="w-9 h-5 bg-gray-400 rounded-full peer-checked:bg-purple-600 transition-all"></div>
        <span className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-transform peer-checked:translate-x-4"></span>
      </label>
    </div>
  );
};

export default DarkModeToggle;
