import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const Greeting = () => {

    const language = useContext(LanguageContext);

    if (language === "English") {
        return <p>Hello!</p>
    } else if (language === "Spanish") {
        return <p>¡Hola!</p>
    } else {
        return <p>Bonjour</p>
    }

}

export default Greeting;