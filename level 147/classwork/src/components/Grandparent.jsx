import { useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Child from "./Child";
import Parent from "./Parent";

const Grandparent = () => {

    const [mode, setMode] = useState(false);

    return (
        <>
            <ThemeContext.Provider value={mode ? "dark" : "light"}>
                <Parent />
            </ThemeContext.Provider>

            <button onClick={() => setMode(!mode)}>Change</button>
        </>
    );


}

export default Grandparent;