import { PostWrapper } from "./your-listings.styles";
import { PostHeading } from "./your-listings.styles";
import { PostPicture } from "./your-listings.styles";
import { PostType } from "./your-listings.styles";
import { PostDesc } from "./your-listings.styles";

const YourListingsPost = ({item}) => {
    const { name, type, pic, desc } = item;
    
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
        </PostWrapper>
    )
}

export default YourListingsPost