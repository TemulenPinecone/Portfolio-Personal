import { FigmaIcon } from "./icons/FigmaIcon";
import { GitIcon } from "./icons/GitIcon";
import { GreenDotIcon } from "./icons/GreenDotIcon";
import { LocationIcon } from "./icons/LocationIcon";
import { TwitterIcon } from "./icons/TwitterIcon";
import { useTheme } from "@/context/ThemeContext";

function Profile() {
  const { theme } = useTheme();

  const bgColor = `${theme == `light` ? `bg-white` : `bg-black`}`;

  const borderClassName = `border-r-8 border-b-8 ${
    theme == `light`
      ? `border-b-white border-r-white`
      : `border-b-black border-r-black`
  }`;

  return (
    <div className={`${bgColor} flex px-10`}>
      <div className="py-[100px] w-[80%] my-auto font-extralight">
        {/* CONTENT */}
        <div>
          <h1
            className="text-4xl font-bold mb-3 *:if (theme==`light`) {text-gray-900
          } else {text-gray-100}"
          >
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
              {theme == `light` ? (
                <GitIcon stroke={`#4B5563`} width={30} height={30} />
              ) : (
                <GitIcon stroke={`#FFFFFF`} width={30} height={30} />
              )}
            </div>
            <div>
              {theme == `light` ? (
                <TwitterIcon stroke={`#4B5563`} width={23} height={23} />
              ) : (
                <TwitterIcon stroke={`#FFFFFF`} width={23} height={23} />
              )}
            </div>
            <div className="pl-1">
              {theme == `light` ? (
                <FigmaIcon stroke={`#4B5563`} width={20} height={28} />
              ) : (
                <FigmaIcon stroke={`#FFFFFF`} width={20} height={28} />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="w-[20%] my-auto">
        <div className="flex">
          <div className="flex content-center relative z-10 border-r-gray-400 border-b-gray-400 border-r-8 border-b-8">
            <div className={borderClassName}>
              <img
                src="https://amateurphotographer.com/wp-content/uploads/sites/7/2023/04/Paulina-Stopka-vertical-landscapes-Tryfan-Eryri-National-Park-Tatra-Mountains.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
