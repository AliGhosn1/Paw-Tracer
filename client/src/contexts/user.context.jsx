import { createContext, useEffect, useState } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener } from "../utils/firebase/firebase.utils";
import { getUserListings } from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
    user: null,
    setUser: () => {},
    updateProfileListings: () => {},
    fetchAllListings: () => {}
});

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [currentUserListings, setcurrentUserListings] = useState(null);

    const setCurrentUser = (user) => {
        setUser(user);
    }

    
    const fetchAllListings = async () => {
        const userListings = await getUserListings(user);
        setcurrentUserListings(userListings);
    }; 
    

    useEffect(() => {
        fetchAllListings();

        const unsubscribe = onAuthStateChangedListener((user) => {
            if(user){
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });

        return unsubscribe;
    }, [])

    useEffect(() => {
        if(user)
            fetchAllListings();
    }, [user]) 

    const value = {user, setUser, currentUserListings, fetchAllListings};

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
};