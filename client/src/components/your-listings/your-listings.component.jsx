import YourListingsPost from "./your-listings-post.component";

const YourListings = () => {
    const listings = [
        {
            name: "Bob",
            type: "Cat",
            pic: 'https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_640.jpg',
            desc: "Hi this is Bob he is very nice cat. He likes biryani."
        }
    ]

    return(
        <>
            {
                listings.map((item) => (
                    <YourListingsPost item={item} />
                ))
            }
        </>
    ) 
}

export default YourListings;