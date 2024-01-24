import { workData } from "@/datas/experienceData";
import { WorkIcon } from "./icons/WorkIcon";
import { useTheme } from "@/context/ThemeContext";

export const Work = () => {
  const { theme } = useTheme();

  const tagClass = ` border-transparent rounded-lg w-fit px-5 py-1 font-extralight ${
    theme == `light`
      ? `bg-gray-200 text-gray-600`
      : `bg-[#374151] text-[#D1D5DB]`
  }`;

  const boldTextDarkLight = `text-xl font-semibold mb-3 ${
    theme == `light` ? `text-black` : `text-[#F9FAFB]`
  }`;

  const tagSkillClass = ` border-transparent rounded-lg w-fit px-2 py-[3px] text-sm font-extralight ${
    theme == `light`
      ? `bg-gray-200 text-gray-600`
      : `bg-[#374151] text-[#D1D5DB]`
  }`;

  const workLeftBorderBg = ` ${
    theme == `light` ? `bg-[#F9FAFB]` : `bg-[#374151]`
  }`;
  const workRightBorderBg = `font-extralight ${
    theme == `light`
      ? `bg-[#F9FAFB] text-[#4B5563]`
      : `bg-[#1F2937] text-[#D1D5DB] font-extralight`
  }`;

  const textDarkLight = ` ${
    theme == `light` ? `text-gray-600` : `text-[#D1D5DB]`
  }`;

  const bgColor = `${theme == `light` ? `bg-white` : `bg-black`}`;

  return (
    <div className={`${bgColor} py-[96px] px-[80px]`}>
      <div className="text-gray-600 pb-5">
        <div className="flex justify-center pb-1">
          <p className={tagClass}>Work</p>
        </div>
        <div className={`${textDarkLight} flex justify-center font-extralight`}>
          <p>Some of the noteworthy projects I have built:</p>
        </div>
      </div>

      {workData.map((el) => {
        return (
          <div className="flex shadow-2xl rounded-lg mb-10">
            <div
              className={`${workLeftBorderBg} bg-cover w-[50%] flex justify-center items-center rounded-l-lg p-[48px]`}
            >
              <img className="rounded-lg" src={el.image} alt="" />
            </div>
            <div
              className={`${workRightBorderBg} w-[50%] rounded-r-lg p-[48px]`}
            >
              <p className={boldTextDarkLight}>{el.companyName}</p>
              <p className="text-sm pb-[24px]">{el.detail}</p>
              <div className="flex flex-wrap gap-2 pt-2 pb-[24px]">
                {el.techs.map((techsEach, index) => {
                  return (
                    <div>
                      <p className={tagSkillClass}>{techsEach}</p>
                    </div>
                  );
                })}
              </div>
              <div className="my-2">
                <div>
                  <WorkIcon />
                </div>
                <div></div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
