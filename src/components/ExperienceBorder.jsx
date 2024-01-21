import { experienceData } from "@/datas/experienceData";

export const ExperienceBorder = () => {
  return (
    <div className="">
      {experienceData.map((el) => (
        <div className="bg-white 2stRow flex flex-row justify-between text-gray-600 rounded-lg mb-10 w-[800px]">
          <div className="text-[#14A800] w-[20%] flex justify-center items-center">
            <p className="text-2xl">{el.companyLogo}</p>
          </div>
          <div className="w-[40%]">
            <p className="text-black text-xl font-bold">{el.position}</p>
            <ul className="">
              {el.exDetails.map((exDetail) => {
                return <li>{exDetail}</li>;
              })}
            </ul>
          </div>
          <div className="w-[20%]">
            <p>{el.experiencePeriod}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
