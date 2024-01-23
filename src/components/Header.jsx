import { DarkModeIcon } from "./icons/DarkModeIcon";
import react from "react";
import { useTheme } from "@/context/ThemeContext";

function Header() {
  const { theme, setTheme } = useTheme();

  const changeThemeHandler = () => {
    setTheme(theme === `light` ? `dark` : `light`);
  };

  return (
    <div className=" static flex justify-between px-10 my-2 h-[50px]">
      <div className="">
        <img
          className="w-[300px] h-[100px] object-cover"
          // src="https://img.freepik.com/premium-vector/elegant-vector-calligraphy-handwriting-name-joseph_427177-583.jpg"
        ></img>
      </div>
      <div className="flex gap-5 items-center text-gray-600 font-extralight">
        <a href="#">About</a>
        <a href="#">Work</a>
        <a href="#">Testimonials</a>
        <a href="#">Contact</a>
        <p className="text-1xl">|</p>
        <button onClick={changeThemeHandler}>
          <DarkModeIcon width={30} height={30} />
        </button>
        <button className="bg-black rounded-lg text-white text-sm px-3 py-1">
          Download CV
        </button>
      </div>
    </div>
  );
}
export default Header;
