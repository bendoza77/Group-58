import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Child = () => {

    const theme = useContext(ThemeContext);

    return (
        <>
            <div style={{width: 300, height: 300, backgroundColor: theme === "dark" ? "black" : "white"}}></div>
        </>
    );

    
}

export default Child;