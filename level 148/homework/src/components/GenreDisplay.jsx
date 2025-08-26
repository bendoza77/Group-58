import { useContext } from "react";
import { GenreContext } from "../context/GenreContext";

const GenreDisplay = () => {

    const genre = useContext(GenreContext);

    if (genre === "Jazz") {
        return <p style={{color: "blue"}}>Your favorite music genre is: Jazz</p>
    } else if (genre === "Rock") {
        return <p style={{color: "red"}}>Your favorite music genre is: Rock</p>
    } else {
        return <p style={{color: "green"}}>Your favorite music genre is: Pop</p>
    }


    
}

export default GenreDisplay;