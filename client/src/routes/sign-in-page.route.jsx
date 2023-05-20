import { UserContext } from "../contexts/user.context";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import SignIn from "../components/sign-in/sign-in.component";

const SignInPage = () => {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    useEffect(() => {
        if(user)
            navigate('/app')
        else
            navigate('/')
    }, [user])

    return (
        <>
            {user ? <></> : <SignIn />}
        </>
    )
}

export default SignInPage