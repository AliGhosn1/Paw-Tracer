import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyBtVmdjK3YjqEWlWjhsxuFW9cGOFbhyrvQ",
    authDomain: "pawtracer-5770b.firebaseapp.com",
    projectId: "pawtracer-5770b",
    storageBucket: "pawtracer-5770b.appspot.com",
    messagingSenderId: "42821221714",
    appId: "1:42821221714:web:4ec7d93ce6dfb0a4a38e8b"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) =>{
    if(!userAuth) return;
    
    const userDocRef = doc(db, "users", userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {displayName, email, createdAt, ...additionalInformation})
        }
        catch(error){
            console.log("error creating user", error.message)
        }
    }

    return userDocRef;
}

export const signOutUser = () => signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);