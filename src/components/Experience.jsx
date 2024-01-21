import { experienceData } from "@/datas/experienceData";
import { ExperienceBorder } from "./ExperienceBorder";
export const Experience = () => {
  return (
    <div className="bg-gray-50 py-20 flex flex-col items-center">
      {/* 1ST ROW */}
      <div className="1stRow">
        <div className="flex justify-center pb-2">
          <p className="border rounded-lg w-fit bg-gray-200 text-gray-600 px-5">
            Experience
          </p>
        </div>
        <div className="flex justify-center pb-20">
          <p className="text-gray-600 ">
            Here is a quick summary of my most recent experiences:
          </p>
        </div>
      </div>
      {/* 2ND ROW */}
      <div className="">
        <ExperienceBorder />
      </div>
    </div>
  );
};
