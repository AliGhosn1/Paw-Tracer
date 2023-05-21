import { useEffect, useState } from "react";
import { getDisplayName } from "../../utils/firebase/firebase.utils";

import { PostWrapper } from "../profile/your-listings.styles";
import { PostHeading } from "../profile/your-listings.styles";
import { PostPicture } from "../profile/your-listings.styles";
import { PostType } from "../profile/your-listings.styles";
import { PostDesc } from "../profile/your-listings.styles";
import { UserHeading } from "./listing.styles";

const ListingPost = ({ listing }) => {
    const { desc, name, pic, type, user } = listing;
    const [owner, setOwner] = useState(null);

    useEffect(() => {
        const fetchAllListings = async () => {
            const postOwner = await getDisplayName(user);
            setOwner(postOwner);
        }; 

        fetchAllListings();
    }, [])

    return (
        <>
            {owner &&
                    <PostWrapper>
                        <PostHeading>
                            {name} 
                           <UserHeading>
                            Posted by {owner}
                           </UserHeading>
                        </PostHeading>
                        <PostPicture src={pic}/>
                        <PostType>
                            {type} 
                        </PostType>
                        <PostDesc>
                            {desc}
                        </PostDesc>
                    </PostWrapper>
            }
        </>
    )
}

export default ListingPost