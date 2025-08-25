import { useState } from "react"
import { RoleContext } from "./context/RoleContext ";
import ShowRole from "./components/ShowRole";

const App = () => {

  const [role, setRole] = useState("");

  return (
    <>
      <RoleContext.Provider value={role}>
        <ShowRole />
      </RoleContext.Provider>

      <button onClick={() => setRole(prev => prev = "guest")}>Guest</button>
      <button onClick={() => setRole(prev => prev = "member")}>Member</button>
      <button onClick={() => setRole(prev => prev = "admin")}>Admin</button>
    </>
  );



}

export default App
