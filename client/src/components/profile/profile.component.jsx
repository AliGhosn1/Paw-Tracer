import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

import ProfilePost from "./profilePost.component";
import { UserContext } from "../../contexts/user.context";


const Profile = () => {
    const navigate = useNavigate();
    const { currentUserListings } = useContext(UserContext);

    const onCreateClick = () => {
        navigate('create')
    }

    return(
        <>
            <button onClick={onCreateClick}>ADD</button>
            {currentUserListings &&
                currentUserListings.map((item) => (
                    <ProfilePost key={item.name} item={item} />
                ))
            }
        </>
    ) 
}

export default Profile;