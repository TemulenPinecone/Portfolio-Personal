import { CopyrightIcon } from "./icons/CopyrightIcon";
import { useTheme } from "@/context/ThemeContext";

export const Footer = () => {
  const { theme } = useTheme();

  const bgClass = ` ${theme == `light` ? `bg-gray-50` : `bg-[#111827]`}`;

  const textDarkLight = `font-extralight ${
    theme == `light` ? `text-gray-600` : `text-[#D1D5DB]`
  }`;

  return (
    <div
      className={`${bgClass} flex justify-center items-center py-[24px] px-[80px]`}
    >
      {" "}
      {theme == `light` ? (
        <CopyrightIcon stroke={`#4B5563`} width={20} height={20} />
      ) : (
        <CopyrightIcon stroke={`white`} width={20} height={20} />
      )}
      <p className={textDarkLight}>
        &nbsp; | 2023 <a>Designed</a> and <a>Coded</a> with ❤️️ by Joseph.T
      </p>
    </div>
  );
};
