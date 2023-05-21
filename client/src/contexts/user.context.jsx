import { createContext, useEffect, useState } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener } from "../utils/firebase/firebase.utils";
import { getUserListings } from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
    user: null,
    setUser: () => {},
    updateProfileListings: () => {}
});

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [currentUserListings, setcurrentUserListings] = useState(null);

    const setCurrentUser = (user) => {
        setUser(user);
    }

    const updateProfileListings = async () => {
        const fetchAllListings = async () => {
            const userListings = await getUserListings(user);
            setcurrentUserListings(userListings);
        }; 
    
        fetchAllListings();
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if(user){
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
            console.log(user);
        });

        return unsubscribe;
    }, [])

    useEffect(() => {
        if(user)
            updateProfileListings()
    }, [currentUserListings, user]) 

    const value = {user, setUser, currentUserListings};

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
};