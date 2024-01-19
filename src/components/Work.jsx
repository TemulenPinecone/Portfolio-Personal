import { wordData } from "@/datas/experienceData";
import { WorkIcon } from "./icons/WorkIcon";

export const Work = () => {
  return (
    <div>
      <div className="py-5 px-5">
        <div className="text-gray-600 pb-5">
          <div className="flex justify-center pb-1">
            <p className="border rounded-lg w-fit bg-gray-200 px-5">Work</p>
          </div>
          <div className="flex justify-center">
            <p>Some of the noteworthy projects I have built:</p>
          </div>
        </div>

        {wordData.map((el) => {
          return (
            <div className="flex shadow-2xl rounded-lg mb-10">
              <div className=" w-[50%] bg-gray-200 flex justify-center items-center rounded-l-lg">
                <img className="h-[90%] rounded-lg" src={el.image} alt="" />
              </div>
              <div className="w-[50%] text-gray-600 pl-3 rounded-r-lg">
                <p className="text-2xl font-medium pb-1 text-black">
                  {el.companyName}
                </p>
                <p className="text-sm">{el.detail}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {el.techs.map((techsEach, index) => {
                    return (
                      <div>
                        <p className="border rounded-lg w-fit bg-gray-200 px-1 text-sm">
                          {techsEach}
                        </p>
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
    </div>
  );
};
