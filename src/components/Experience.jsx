import { ExperienceBorder } from "./ExperienceBorder";

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
          <ExperienceBorder />
        </div>
      </div>
    </div>
  );
};
