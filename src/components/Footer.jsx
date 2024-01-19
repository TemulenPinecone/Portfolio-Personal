import { CopyrightIcon } from "./icons/CopyrightIcon";

export const Footer = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <CopyrightIcon width={20} height={20} />
        <p className="text-gray-600">
          {" "}
          | 2023 <a>Designed</a> and <a>Coded</a> with ❤️️ by Joseph.T
        </p>
      </div>
    </div>
  );
};
