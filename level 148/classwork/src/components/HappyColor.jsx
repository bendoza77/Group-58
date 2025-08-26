import { useContext } from "react";
import { ColorContext } from "../context/ColorContext";

const HappyColor = () => {

    const color = useContext(ColorContext);

    return (
        <>
            <div style={{width: 400, height: 400, backgroundColor: color}}></div>
        </>
    );


}

export default HappyColor;