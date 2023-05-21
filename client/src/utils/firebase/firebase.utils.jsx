import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, arrayUnion, updateDoc, collection, query, getDocs, arrayRemove } from "firebase/firestore"

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

export const createUserPost = async (userAuth, userPost) =>{
    if(!userAuth || !userPost) return;
    
    const userDocRef = doc(db, "users", userAuth.uid);
    const postsDocRef = doc(db, "posts", "posts");

    try{
        await updateDoc(userDocRef, {
            posts: arrayUnion(userPost)
        });
        await updateDoc(postsDocRef, {
            allPosts: arrayUnion({...userPost, user: userAuth.uid})
        });
    }

    catch(error){
        console.log("error creating post", error.message);
    }
    
    return userDocRef;
}

export const deleteUserPost = async (userAuth, userPost) =>{
    if(!userAuth || !userPost) return;
    
    const userDocRef = doc(db, "users", userAuth.uid);
    const postsDocRef = doc(db, "posts", "posts");

    try{
        await updateDoc(userDocRef, {
            posts: arrayRemove(userPost)
        });
        await updateDoc(postsDocRef, {
            allPosts: arrayRemove({...userPost, user: userAuth.uid})
        });
    }

    catch(error){
        console.log("error creating post", error.message);
    }
    
    return userDocRef;
}

export const getAllListings = async () => {
    const collectionRef = collection(db, 'posts');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);

    const allListings = querySnapshot.docs[0].data().allPosts

    return allListings;
}

export const getUserListings = async (user) => {
    const userDocRef = doc(db, "users", user.uid);
    const userDoc = await getDoc(userDocRef);

    return userDoc.data().posts;
}

export const getDisplayName = async (userUid) => {
    const userDocRef = doc(db, "users", userUid);
    const userDoc = await getDoc(userDocRef);

    return userDoc.data().displayName;
}

export const signOutUser = () => signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);