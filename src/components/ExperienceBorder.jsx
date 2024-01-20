import { experienceData } from "@/datas/experienceData";

export const ExperienceBorder = () => {
  return (
    <div className="">
      {experienceData.map((el) => (
        <div className="bg-white 2stRow flex flex-row justify-between text-gray-600 rounded-lg mb-10">
          <div className="text-[#14A800]">
            <p className="text-2xl">{el.companyLogo}</p>
          </div>
          <div>
            <p className="text-black text-xl font-bold">{el.position}</p>

            {el.exDetails.map((exDetail) => {
              return <li>{exDetail}</li>;
            })}
          </div>
          <div>
            <p>{el.experiencePeriod}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
