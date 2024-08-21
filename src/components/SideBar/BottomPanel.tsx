import { SideBarTools, SideBarToolsProps } from "./SideBarTools";
import {
  ArrowRightEndOnRectangleIcon,
  ArrowTopRightOnSquareIcon,
  SunIcon,
  TrashIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { useThemeContext } from "../../context/ThemeProvider";

export const BottomPanel = () => {
  const { theme } = useThemeContext();

  const { changeTheme } = useThemeContext();
  const items: SideBarToolsProps[] = [
    {
      name: "Clear conversations",
      icon: <TrashIcon className="size-6" />,
    },
    {
      name: "Light Mode",
      onClick: changeTheme,
      icon: <SunIcon className="size-6" />,
    },
    {
      name: "My account",
      icon: <UserIcon className="size-6" />,
    },
    {
      name: "Updates & FAQ",
      icon: <ArrowTopRightOnSquareIcon className="size-6" />,
    },
    {
      name: "Log Out",
      icon: <ArrowRightEndOnRectangleIcon className="size-6" />,
    },
  ];

  return (
    <div
      className={`flex flex-col gap-y-1 py-5 px-5 border-t
    ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}
    >
      {items.map((item, index) => (
        <SideBarTools
          key={index}
          name={item.name}
          icon={item.icon}
          onClick={item.onClick}
        />
      ))}
    </div>
  );
};
