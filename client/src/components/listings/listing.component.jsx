import { useEffect, useState } from "react";

import { getAllListings } from "../../utils/firebase/firebase.utils";
import ListingPost from "./listing-post.component";

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
        <div>
        {allListings &&
            allListings.map((listing) => (
                <ListingPost listing={listing} />
            ))
        }
        </div>
    ) 
}

export default Listing;