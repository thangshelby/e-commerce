import { ReactNode } from "react";
import { useMode } from "../theme";
import { ThemeProvider } from "@emotion/react";

const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [theme] = useMode();
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default GlobalProvider;
