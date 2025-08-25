import { useContext } from "react"
import { RoleContext } from "../context/RoleContext "

const ShowRole = () => {

    const roleContext = useContext(RoleContext);

    if (roleContext === "guest") {
        return <p>Hello Guest! Feel free to explore.</p>
    } else if (roleContext === "member") {
        return <p>Welcome back, Member!</p>
    } else {
        return <p>Hello Admin! You have full access.</p>
    }

}

export default ShowRole;