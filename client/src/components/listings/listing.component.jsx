import { useEffect, useState } from "react";

import { getAllListings } from "../../utils/firebase/firebase.utils";
import ListingPost from "./listing-post.component";
import { PostsContainer } from "../profile/your-listings.styles";
import { Heading } from "../homepage/homepage.styles";

const Listing = () => {
    const [allListings, setAllListings] = useState(null);

    useEffect(() => {
        const fetchAllListings = async () => {
            const categoryMap = await getAllListings();
            setAllListings(categoryMap);
        }; 

        fetchAllListings();
    }, []) 

    return(
        <>
            <Heading>LISTINGS</Heading>
            <PostsContainer>
                {allListings &&
                    allListings.map((listing) => (
                        <ListingPost listing={listing} />
                    ))
                }
            </PostsContainer>
        </>
        
    ) 
}

export default Listing;