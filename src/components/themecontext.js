import React from "react"
export const themes={
    dark:{
        color:"white",
        background:"black"
    },
    light:{
        color:"black",
        background:"white"
    }
}
const ThemeContext=React.createContext(themes)
export default ThemeContext;

//creation of context object