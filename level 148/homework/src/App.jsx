import { useState } from "react";
import { LanguageContext } from "./context/LanguageContext";
import Greeting from "./components/Greeting";
import { GenreContext } from "./context/GenreContext";
import GenreDisplay from "./components/GenreDisplay";

const App = () => {

  const [language, setLanguage] = useState("French");
  const [genre, setGenre] = useState("Jazz");

  return (
    <>
    {/* Task 1 */}
      <LanguageContext.Provider value={language}>
        <Greeting />
      </LanguageContext.Provider>

      <button onClick={() => setLanguage(prev => prev = "English")}>English</button>
      <button onClick={() => setLanguage(prev => prev = "Spanish")}>Spanish</button>
      <button  onClick={() => setLanguage(prev => prev = "French")}>French</button>


      {/* Task 2 */}

      <GenreContext.Provider value={genre}>
        <GenreDisplay />
      </GenreContext.Provider>

      <button onClick={() => setGenre("Jazz")}>Jazz</button>
      <button onClick={() => setGenre("Rock")}>Rock</button>
      <button onClick={() => setGenre("Pop")}>Pop</button>

    </>
  );



}

export default App
