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
        <div className="grid grid-cols-3 gap-y-5 sm:grid-cols-8">
          {skillsIconsCol1.map((element) => (
            <div className="w-[40%] place-self-center">
              <div>{element.iconSVG}</div>
              <div>
                <p className={`${divClassName} font-extralight text-center`}>
                  {element.iconName}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
