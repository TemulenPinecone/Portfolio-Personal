import { FigmaIcon } from "./icons/FigmaIcon";
import { GitIcon } from "./icons/GitIcon";
import { GreenDotIcon } from "./icons/GreenDotIcon";
import { LocationIcon } from "./icons/LocationIcon";
import { TwitterIcon } from "./icons/TwitterIcon";
function Hero() {
  return (
    <div className="container bg-white text-gray-600 flex px-10">
      <div className="py-[20px] w-[80%] my-auto font-extralight">
        {/* CONTENT */}
        <div className="content ">
          <h1 className="text-4xl text-black font-bold mb-3">
            Hi, I'm Temulen.G 👋
          </h1>
          <p className="text-sm">
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive.
          </p>
        </div>
        {/* INFORMATION */}
        <div className="text-sm mt-3">
          <div className="flex gap-2">
            <LocationIcon width={15} />
            <p>Ulaanbaatar, Mongolia</p>
          </div>
          <div className="flex gap-2">
            <div className="flex justify-center items-center w-3.5">
              <GreenDotIcon width={7} height={7} />
            </div>
            <p>Available for new projects</p>
          </div>
        </div>

        {/* LINKS */}
        <div className="mt-3">
          <div className="flex items-center">
            <div>
              <GitIcon width={30} height={30} />
            </div>
            <div>
              <TwitterIcon width={20} height={20} />
            </div>
            <div className="pl-1">
              <FigmaIcon width={20} height={20} />
            </div>
          </div>
        </div>
      </div>

      <div className="w-[20%] my-auto">
        <div className="flex">
          <div className="flex content-center">
            <img
              className="border-white border-8"
              src="https://amateurphotographer.com/wp-content/uploads/sites/7/2023/04/Paulina-Stopka-vertical-landscapes-Tryfan-Eryri-National-Park-Tatra-Mountains.jpg"
              alt=""
            />
            <div className="bg-gray-600 pr-5"></div>
          </div>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
