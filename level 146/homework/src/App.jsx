import { useState } from "react";
import { useCounter } from "./hooks/useCounter"
import { useInput } from "./hooks/useInput";

const App = () => {

  const [count, setCount] = useCounter();
  const [info, setInfo] = useInput();

  return (
    <>
    {/* Task 1 */}
      <p>{count}</p>
      <button onClick={() => setCount("plus")}>Plus</button>
      <button onClick={() => setCount("reset")}>Reset</button>

      {/* Task 2 */}

      <form>
        <input onChange={setInfo} type="text" name="userName" id="userName" placeholder="Enter your name" />
        <input onChange={setInfo}  type="email" name="userEmail" id="userEmail" placeholder="Enter your email"/>
      </form>

      <p>Name: {info.userName}</p>
      <p>Email: {info.userEmail}</p>
      
    </>
  );


}

export default App
