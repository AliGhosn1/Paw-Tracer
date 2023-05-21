import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

import ProfilePost from "./profilePost.component";
import { UserContext } from "../../contexts/user.context";
import { PostButton, PostsContainer } from "./your-listings.styles";
import { Heading } from "../homepage/homepage.styles";

const Profile = () => {
    const navigate = useNavigate();
    const { currentUserListings } = useContext(UserContext);

    const onCreateClick = () => {
        navigate('create')
    }

    return(
        <>
            <Heading>YOUR LISTINGS</Heading>
            <PostButton onClick={onCreateClick}>ADD LISTING</PostButton>
            <PostsContainer>
                {currentUserListings &&
                    currentUserListings.map((item) => (
                        <ProfilePost key={item.name} item={item} />
                    ))
                }
            </PostsContainer>
        </>
    ) 
}

export default Profile;