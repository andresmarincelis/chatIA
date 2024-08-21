import { TopPanel } from "./TopPanel";
import { BottomPanel } from "./BottomPanel";
import { useThemeContext } from "../../context/ThemeProvider";

export const SideBar = () => {

  const { theme } = useThemeContext();

  return (
    <div className={`flex flex-col h-screen justify-between border-r
    ${
      theme === "dark"
        ? "bg-black"
        : "bg-white"
    }`}>
      <TopPanel />
      <BottomPanel />
    </div>
  );
};
