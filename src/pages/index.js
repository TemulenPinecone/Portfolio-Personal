import Image from "next/image";
import { Inter } from "next/font/google";
import Portfolio from "./portfolio";
import ThemeProvider from "@/context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  );
}
