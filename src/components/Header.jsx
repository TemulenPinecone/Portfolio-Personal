import react from "react";
import { useTheme } from "@/context/ThemeContext";
import { DarkModeIcon } from "./icons/DarkModeIcon";
import { LightModeIcon } from "./icons/LightModeIcon";

function Header() {
  const { theme, setTheme } = useTheme();

  const changeThemeHandler = () => {
    setTheme(theme === `light` ? `dark` : `light`);
  };

  const divClassName = `flex gap-5 items-center font-extralight ${
    theme == `light` ? `bg-white text-gray-600` : `bg-black text-gray-100`
  }`;

  const downloadButton = `rounded-lg text-white text-sm px-3 py-1 ${
    theme == `light` ? `bg-black text-gray-100` : `bg-gray-100 text-gray-800`
  }`;

  return (
    <div className=" static flex justify-between px-10 h-[50px]">
      <div className="">
        <img
          className="w-[300px] h-[100px] object-cover"
          // src="https://img.freepik.com/premium-vector/elegant-vector-calligraphy-handwriting-name-joseph_427177-583.jpg"
        ></img>
      </div>
      <div className={divClassName}>
        <a className={divClassName} href="#">
          About
        </a>
        <a href="#">Work</a>
        <a href="#">Testimonials</a>
        <a href="#">Contact</a>
        <p className="text-1xl">|</p>
        <button onClick={changeThemeHandler}>
          {theme == "light" ? (
            <LightModeIcon width={30} height={30} />
          ) : (
            <DarkModeIcon width={30} height={30} />
          )}
        </button>
        <button className={downloadButton}>Download CV</button>
      </div>
    </div>
  );
}
export default Header;
