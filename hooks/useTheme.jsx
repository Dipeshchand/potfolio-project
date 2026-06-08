import { useContext, useState } from "react";
import { ThemeContext } from "../src/context/ThemeContext";

export const useTheme = ()=>{
    return useContext(ThemeContext);
}