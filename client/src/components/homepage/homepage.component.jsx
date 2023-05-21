import { getAllListings } from "../../utils/firebase/firebase.utils"
import HomapegeNewPost from "./homapegeNewPost.component"
import { HomePageWrapper, TodaysStoryWrapper, NewestPostWrapper, Heading } from "./homepage.styles"
import { useState, useEffect } from "react"

const HomePage = () => {
  const [newListings, setNewListings] = useState([]);

  const TodaysStory = {
    img: 'https://assets3.thrillist.com/v1/image/3148428/600x400/flatten;crop;jpeg_quality=60.jpg',
    dest: 'https://www.thedodo.com/daily-dodo/clever-shelter-dog-discovers-a-unique-way-of-getting-attention',
    title: 'Clever Shelter Dog Discovers A Unique Way Of Getting Attention'
  }


    useEffect(() => {
        const fetchNewListings = async () => {
            const categoryMap = await getAllListings();
            setNewListings(categoryMap.slice(0, 4));
        }; 

        fetchNewListings();
    }, []) 

  return (
    <>
    <Heading>HOME</Heading>
    <HomePageWrapper>
      
      <TodaysStoryWrapper>
        <h1>Today's Headline</h1>
        <p>{ TodaysStory.title }</p>
        <div className="img">
          <img src={TodaysStory.img}/><br></br>
        </div>
        <a href={TodaysStory.dest} target="_blank">Read More 	&#8594;</a>
      </TodaysStoryWrapper>
      <NewestPostWrapper>
        <h1>Our New Friends</h1>
        <div className="posts">
          {
            newListings.map((post) => (
              <HomapegeNewPost key={post.name} post={post}/>
            ))
          }
        </div>
      </NewestPostWrapper>
    </HomePageWrapper>
    </>
    
  )
}

export default HomePage