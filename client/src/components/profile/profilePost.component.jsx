import { useContext } from "react";

import { UserContext } from "../../contexts/user.context";
import { deleteUserPost } from "../../utils/firebase/firebase.utils";
import { PostWrapper } from "./your-listings.styles";
import { PostHeading } from "./your-listings.styles";
import { PostPicture } from "./your-listings.styles";
import { PostType } from "./your-listings.styles";
import { PostDesc } from "./your-listings.styles";

const ProfilePost = ({item}) => {
    const { name, type, pic, desc } = item;
    const { user } = useContext(UserContext);

    const handleDelete = () => {
        deleteUserPost(user, item);
    }

    return(
        <PostWrapper>
            <PostHeading>
                {name}
            </PostHeading>
            <PostPicture src={pic}/>
            <PostType>
                {type} 
            </PostType>
            <PostDesc>
                {desc} 
            </PostDesc>
            <button onClick={handleDelete}>X</button>
        </PostWrapper>
    )
}

export default ProfilePost