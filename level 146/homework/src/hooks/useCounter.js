import { useState } from "react"

const useCounter = () => {

    const [count, setCount] = useState(0);

    const handleCount = (func) => {

        if (func === "plus") {
            setCount(prev => prev += 1);
        } else if (func === "reset") {
            setCount(prev => prev = 0);
        }
        
    }

    return [count, handleCount];
}

export { useCounter };