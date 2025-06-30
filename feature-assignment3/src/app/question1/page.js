
import {AuthProvider} from "./AuthContext";
import Authentication from "./AuthComponent";
import { ThemeProvider } from "./ThemeContext";
import { Children } from "react";

const Page = () => {
  return (
    <Authentication />
  );
};

export default Page; 