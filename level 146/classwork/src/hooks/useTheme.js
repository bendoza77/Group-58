import { useState } from "react"

const useTheme = () => {

    const [theme, setTheme] = useState(true);

    const handleChange = () => {
        setTheme(prev => prev = !theme);
    }

    return [theme, handleChange];


}

export { useTheme };