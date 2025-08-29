import { assets } from "../assets/assets";

const CloseIcon = ({ setIsMenuOpen }) => {
  return (
    <img
      className="absolute top-3 right-3 w-5 h-5 cursor-pointer md:hidden not-dark:invert"
      src={assets.close_icon}
      onClick={() => setIsMenuOpen(false)}
      alt="Close"
    />
  );
};

export default CloseIcon;
