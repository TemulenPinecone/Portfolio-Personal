import react from "react";
import { useTheme } from "@/context/ThemeContext";
import { DarkModeIcon } from "./icons/DarkModeIcon";
import { LightModeIcon } from "./icons/LightModeIcon";
import { HamburgerIcon } from "./icons/HamburgerIcon";
import { SignatureIcon } from "./icons/SignatureIcon";
import { SignatureIconWhite } from "./icons/SignatureIconWhite";

function Header() {
  const { theme, setTheme } = useTheme();

  const changeThemeHandler = () => {
    setTheme(theme === `light` ? `dark` : `light`);
  };

  const divClassName = ` ${
    theme == `light` ? `bg-white text-gray-900` : `bg-black text-gray-100`
  }`;

  const bgColor = ` ${theme == `light` ? `bg-white` : `bg-black`}`;

  const downloadButton = `rounded-lg text-sm px-5 py-1 ${
    theme == `light` ? `bg-black text-gray-100` : `bg-gray-50 text-gray-900`
  }`;

  return (
    <div className={`${bgColor} sm:static flex justify-between px-10 h-[70px]`}>
      <div className="w-[300px] h-[70px]">
        {theme == "light" ? <SignatureIcon /> : <SignatureIconWhite />}
      </div>
      <div
        className={`${divClassName} hidden sm:flex sm:gap-5 sm:items-center sm:font-extralight`}
      >
        <a className={divClassName} href="#">
          About
        </a>
        <a href="#">Work</a>
        <a href="#">Testimonials</a>
        <a href="#">Contact</a>
        <p className="text-1xl">|</p>
        <button onClick={changeThemeHandler}>
          {theme == "light" ? (
            <DarkModeIcon width={30} height={30} />
          ) : (
            <LightModeIcon width={30} height={30} />
          )}
        </button>
        <button className={downloadButton}>Download CV</button>
      </div>
      <div className="flex items-center pr-5 pt-10 sm:hidden">
        <HamburgerIcon width={30} />
      </div>
    </div>
  );
}
export default Header;
