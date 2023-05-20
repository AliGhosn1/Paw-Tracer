import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

import { SignInWrapper, CustomGoogleBTN, GoogleText, SignInTitle, SignInContent } from "./sign-in.styles";
import { PawTracer } from "../general.styles";
import { ReactComponent as GoogleLogo } from "../../assets/google.svg";

const SignIn = () => {

    const logGoogleUser = async () =>{
        await signInWithGooglePopup();
    }

    return (
        <SignInWrapper>
            <SignInContent>
                <PawTracer width='150px' height='150px'/>
                <SignInTitle>PAW TRACER</SignInTitle>
            </SignInContent>
            <CustomGoogleBTN onClick={logGoogleUser}> 
                <GoogleLogo style={{background: '#fff', margin: '0'}}/>
                <GoogleText>Sign in with Google</GoogleText>
            </CustomGoogleBTN>
        </SignInWrapper>
    )
}

export default SignIn;