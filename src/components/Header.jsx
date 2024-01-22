import { DarkModeIcon } from "./icons/DarkModeIcon";

function Header() {
  return (
    <div className="container static flex justify-between bg-white px-10 my-2 h-[50px]">
      <div className="">
        <img
          className="w-[300px]"
          src="https://img.freepik.com/premium-vector/elegant-vector-calligraphy-handwriting-name-joseph_427177-583.jpg"
        ></img>
      </div>
      <div className="flex gap-5 items-center text-gray-600 font-extralight">
        <a href="#">About</a>
        <a href="#">Work</a>
        <a href="#">Testimonials</a>
        <a href="#">Contact</a>
        <p className="text-1xl">|</p>
        <DarkModeIcon width={30} height={30} />
        <button className="bg-black rounded-lg text-white text-sm px-3 py-1">
          Download CV
        </button>
      </div>
    </div>
  );
}
export default Header;
