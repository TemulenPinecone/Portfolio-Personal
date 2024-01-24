import { CopyIcon } from "./icons/CopyIcon";
import { FigmaIcon } from "./icons/FigmaIcon";
import { GitIcon } from "./icons/GitIcon";
import { TwitterIcon } from "./icons/TwitterIcon";
import { MessageIcon } from "./icons/MessageIcon";
import { PhoneIcon } from "./icons/PhoneIcon";
import { useTheme } from "@/context/ThemeContext";

export const ContactMe = () => {
  const { theme } = useTheme();

  const tagClass = ` border-transparent rounded-lg w-fit px-5 py-1 font-extralight ${
    theme == `light`
      ? `bg-gray-200 text-gray-600`
      : `bg-[#374151] text-[#D1D5DB]`
  }`;

  const textDarkLight = `flex text-center w-[500px] font-extralight ${
    theme == `light` ? `text-gray-600` : `text-[#D1D5DB]`
  }`;
  const textDarkLight2 = `flex text-center font-extralight ${
    theme == `light` ? `text-gray-600` : `text-[#D1D5DB]`
  }`;

  const mediumTextDarkLight = `text-2xl text-medium ${
    theme == `light` ? `text-black` : `text-[#D1D5DB]`
  }`;

  const bgColor = `${theme == `light` ? `bg-white` : `bg-black`}`;

  return (
    <div
      className={`${bgColor} flex flex-col items-center text-gray-600 py-[96px] gap-[48px]`}
    >
      {/* GET IN TOUCH */}
      <div>
        <div className="flex justify-center pb-1 mb-3">
          <p className={tagClass}>Get in touch</p>
        </div>
        <div className={textDarkLight}>
          {/* <div className="flex text-center w-[500px]"> */}
          <p>
            What’s next? Feel free to reach out to me if you're looking for a
            developer, have a query, or simply want to connect.
          </p>
        </div>
      </div>

      {/* EMAIL */}
      <div className="flex flex-col mt-5 items-center gap-3">
        <div className="flex items-center content-center gap-3">
          <div>
            <MessageIcon width={25} height={25} />
          </div>
          <div className={mediumTextDarkLight}>
            <p>JosephT@gmail.com</p>
          </div>
          <div>
            <CopyIcon width={30} height={30} />
          </div>
        </div>

        {/* PHONE */}
        <div className="flex items-center content-center gap-3">
          <div className="flex items-center">
            <PhoneIcon width={25} height={25} />
          </div>
          <div className={mediumTextDarkLight}>
            <p>+976-9595-3927</p>
          </div>
          <div>
            <CopyIcon width={30} height={30} />
          </div>
        </div>
      </div>

      {/*  */}
      <div className="mt-5">
        <p className={textDarkLight2}>
          You may also find me on these platforms!
        </p>
        <div>
          <div className="flex items-center justify-center">
            {/* GIT ICON */}
            {theme == `light` ? (
              <GitIcon stroke={`#4B5563`} width={40} height={40} />
            ) : (
              <GitIcon stroke={`#FFFFFF`} width={40} height={40} />
            )}
            {/* TWITTER ICON */}
            {theme == `light` ? (
              <TwitterIcon stroke={`#4B5563`} width={30} height={30} />
            ) : (
              <TwitterIcon stroke={`#FFFFFF`} width={30} height={30} />
            )}
            {/* FIGMA ICON */}
            {theme == `light` ? (
              <FigmaIcon stroke={`#4B5563`} width={40} height={28} />
            ) : (
              <FigmaIcon stroke={`#FFFFFF`} width={40} height={28} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
