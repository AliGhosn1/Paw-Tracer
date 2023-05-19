import { UserContext } from "../contexts/user.context";
import { useContext } from "react";

import SignIn from "../components/sign-in/sign-in.component";
import HomePage from "../components/homepage/homepage.component";

const Home = () => {
    const { user } = useContext(UserContext);

    return (
        <>
            {user ? <HomePage /> : <SignIn />}
        </>
    )
}

export default Home