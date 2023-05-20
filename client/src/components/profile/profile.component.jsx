import ProfilePost from "./profilePost.component";

const Profile = () => {
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
                    <ProfilePost key={item.name} item={item} />
                ))
            }
        </>
    ) 
}

export default Profile;