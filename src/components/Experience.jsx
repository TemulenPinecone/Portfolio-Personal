import { experienceData } from "@/datas/experienceData";
import { useTheme } from "@/context/ThemeContext";

export const Experience = () => {
  const { theme, setTheme } = useTheme();

  const changeThemeHandler = () => {
    setTheme(theme === `light` ? `dark` : `light`);
  };

  const bgClass = ` ${theme == `light` ? `bg-gray-50` : `bg-[#111827]`}`;

  const borderBg = ` ${theme == `light` ? `bg-white` : `bg-[#1F2937]`}`;

  const textDarkLight = ` ${
    theme == `light` ? `text-gray-600` : `text-[#D1D5DB]`
  }`;

  const boldTextDarkLight = ` ${
    theme == `light` ? `text-black` : `text-[#F9FAFB]`
  }`;

  const tagClass = ` border-transparent rounded-lg w-fit px-5 py-1 font-extralight ${
    theme == `light`
      ? `bg-gray-200 text-gray-600`
      : `bg-[#374151] text-[#D1D5DB]`
  }`;

  const divClassName = `font-extralight ${
    theme == `light` ? `text-gray-600` : `text-[#D1D5DB]`
  }`;

  return (
    <div className={bgClass}>
      {/* 1ST ROW */}

      <div className="pt-20 pb-12">
        <div className="flex justify-center pb-3">
          <p className={tagClass}>Experience</p>
        </div>
        <div className="flex justify-center">
          <p className={divClassName}>
            Here is a quick summary of my most recent experiences:
          </p>
        </div>
      </div>

      {/* 2ND ROW */}
      {/* #1F2937 */}

      <div className="flex flex-col items-center">
        {experienceData.map((el) => (
          <div
            className={`${borderBg} py-5 flex flex-row justify-between text-gray-600 rounded-lg mb-20 w-[800px] shadow-lg shadow-black-900/100`}
          >
            <div className="text-[#14A800] w-[30%] flex justify-center items-center">
              <p className="text-2xl">{el.companyLogo}</p>
            </div>
            <div className="w-[40%]">
              <p className={`${boldTextDarkLight} text-xl font-bold mb-3`}>
                {el.position}
              </p>
              <ul className="">
                {el.exDetails.map((exDetail) => {
                  return (
                    <li
                      className={`${textDarkLight} pb-2 ml-4 list-disc list-outside font-extralight`}
                    >
                      {exDetail}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div
              className={`${textDarkLight} w-[30%] flex justify-center items-center font-extralight`}
            >
              <p>{el.experiencePeriod}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
