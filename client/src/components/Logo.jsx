import { assets } from "../assets/assets";

const Logo = ({ theme }) => {
  return (
    <img
      className="w-full max-w-48"
      src={theme === "dark" ? assets.logo_full : assets.logo_full_dark}
      alt="QuickGPT"
    />
  );
};

export default Logo;
