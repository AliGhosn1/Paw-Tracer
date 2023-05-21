import { useEffect, useState } from "react";
import { getDisplayName } from "../../utils/firebase/firebase.utils";

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
        <div>
            {owner &&
                <>
                    <h1>{ name }</h1>
                    <p>{ desc }</p>
                    <h2>{ owner }</h2>
                </>
            }
        </div>
    )
}

export default ListingPost