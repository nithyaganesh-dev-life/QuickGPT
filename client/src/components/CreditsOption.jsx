import { assets } from "../assets/assets";

const CreditsOption = ({ user, navigate, setIsMenuOpen }) => {
  return (
    <div
      onClick={() => {
        navigate("/credits");
        setIsMenuOpen(false);
      }}
      className="flex items-center gap-2 p-3 mt-4 border border-gray-300 dark:border-white/15 rounded-md cursor-pointer hover:scale-103 transition-all"
    >
      <img
        className="w-4.5 dark:invert"
        src={assets.diamond_icon}
        alt="Gallery"
      />
      <div className="flex flex-col text-sm">
        <p>Credits: {user?.credits}</p>
        <p className="text-xs text-gray-400">
          Purchase credits to use QuickGPT
        </p>
      </div>
    </div>
  );
};

export default CreditsOption;
