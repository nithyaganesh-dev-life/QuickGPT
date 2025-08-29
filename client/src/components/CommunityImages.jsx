import { assets } from "../assets/assets";

const CommunityImages = ({ navigate, setIsMenuOpen }) => {
  return (
    <div
      onClick={() => {
        navigate("/community");
        setIsMenuOpen(false);
      }}
      className="flex items-center gap-2 p-3 mt-4 border border-gray-300 dark:border-white/15 rounded-md cursor-pointer hover:scale-103 transition-all"
    >
      <img
        className="w-4.5 not-dark:invert"
        src={assets.gallery_icon}
        alt="Gallery"
      />
      <div className="flex flex-col text-sm">
        <p>Community Images</p>
      </div>
    </div>
  );
};

export default CommunityImages;
