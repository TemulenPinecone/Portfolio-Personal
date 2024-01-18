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
      <div className="2stRow flex flex-row justify-between text-gray-600 border">
        <div className="text-[#14A800]">
          <p>Company Logo</p>
        </div>
        <div>
          <p className="text-black">Position</p>
          <li>text</li>
          <li>text</li>
          <li>text</li>
        </div>
        <div>
          <p>Date</p>
        </div>
      </div>
    </div>
  );
};
