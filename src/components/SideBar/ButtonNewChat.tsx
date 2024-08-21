import { useThemeContext } from "../../context/ThemeProvider";

export const ButtonNewChat = () => {
  const { theme } = useThemeContext();

  return (
    <button
      className={`flex w-full px-4 py-2 rounded-xl text-lg leading-6 justify-center ${
        theme === "dark"
          ? "bg-bg_btn_dark text-black"
          : "bg-bg_btn text-text_color"
      }`}
    >
      + New Chat
    </button>
  );
};
