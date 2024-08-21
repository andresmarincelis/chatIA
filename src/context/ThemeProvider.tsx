import { createContext, ReactNode, useContext, useState } from "react";

export type Theme = "dark" | "light";

interface ThemeProviderInterface {
  theme: Theme;
  changeTheme: () => void;
}

const ThemeContext = createContext<ThemeProviderInterface>(
  {} as ThemeProviderInterface
);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");

  const changeTheme = () => {
    const newTheme: Theme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme)
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext)