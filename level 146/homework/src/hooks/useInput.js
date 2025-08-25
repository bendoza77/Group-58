import { useState } from "react"

const useInput = () => {

    const [text, setText] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setText(prev => {
            return {...prev, [name]: value};
        })
    }

    return [text, handleChange];
}

export { useInput };