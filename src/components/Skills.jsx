import { useTheme } from "@/context/ThemeContext";
import {
  JavascriptIcon,
  NestJSIcon,
  NextJSIcon,
  ReactIcon,
  SocketIOIcon,
  TypescriptIcon,
  NodeJSIcon,
  ExpressIcon,
} from "./icons/skillsIcon";

import { skillsIconsCol1 } from "@/datas/experienceData";
import { skillsIconsCol2 } from "@/datas/experienceData";

export function Skills() {
  const { theme, setTheme } = useTheme();

  const tagClass = ` border-transparent rounded-lg w-fit px-5 py-1 font-extralight ${
    theme == `light`
      ? `bg-gray-200 text-gray-600`
      : `bg-[#374151] text-[#D1D5DB]`
  }`;

  const bgColor = `${theme == `light` ? `bg-white` : `bg-black`}`;

  const divClassName = ` ${
    theme == `light` ? `text-gray-600` : `text-[#D1D5DB]`
  }`;

  return (
    //   CONTAINER
    <div className={`${bgColor} py-20`}>
      <div className="flex justify-center mb-3">
        <p className={tagClass}>Skills</p>
      </div>
      <div className="flex justify-center mb-10">
        <p className={divClassName}>
          The skills, tools and technologies I am really good at:
        </p>
      </div>
      {/* ICONS */}
      <div className="flex flex-col gap-y-10 justify-between px-5">
        {/* 1st line - MAP */}
        <div className="flex justify-between px-10">
          {skillsIconsCol1.map((element) => (
            <div className="flex flex-col items-center">
              <div className="flex w-16 h-16 justify-center">
                {element.iconSVG}
              </div>
              <div className="flex justify-center">
                <p className={`${divClassName} font-extralight`}>
                  {element.iconName}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 2nd line - MAP */}
        <div className="flex justify-between px-10">
          {skillsIconsCol2.map((element) => (
            <div className="flex flex-col items-center">
              <div className="flex w-16 h-16 justify-center">
                {element.iconSVG}
              </div>
              <div className="flex justify-center">
                <p className="text-white">{element.iconName}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
