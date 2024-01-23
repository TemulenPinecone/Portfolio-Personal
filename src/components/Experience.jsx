import { experienceData } from "@/datas/experienceData";

export const Experience = () => {
  return (
    <div className="container">
      {/* 1ST ROW */}
      <div className="1stRow">
        <div className="flex justify-center">
          <p className="border rounded-lg w-fit bg-gray-200 text-gray-600 px-5">
            Experience
          </p>
        </div>
        <div className="flex justify-center">
          <p className="text-gray-600 ">
            Here is a quick summary of my most recent experiences:
          </p>
        </div>
      </div>

      {/* 2ND ROW */}
      <div className="2stRow">
        <div className="flex justify-center">
          <div className="">
            {experienceData.map((el) => (
              <div className="bg-white 2stRow flex flex-row justify-between text-gray-600 rounded-lg mb-10 w-[800px] shadow-lg shadow-black-900/100">
                <div className="text-[#14A800] w-[20%] flex justify-center items-center">
                  <p className="text-2xl">{el.companyLogo}</p>
                </div>
                <div className="w-[40%]">
                  <p className="text-black text-xl font-bold mb-3">
                    {el.position}
                  </p>
                  <ul className="">
                    {el.exDetails.map((exDetail) => {
                      return (
                        <li className="pb-2 list-disc list-inside">
                          {exDetail}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="w-[20%]">
                  <p>{el.experiencePeriod}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
