import { useTheme } from "./hooks/useTheme"

const App = () => {

    const [mode, setMode] = useTheme();

    return (
        <>
            <div style={{width: 300, height: 300, backgroundColor: mode ? "white" : "black"}}></div>
            <button onClick={setMode}>Change</button>
        </>
    );


}

export default App
