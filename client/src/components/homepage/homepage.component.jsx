import HomapegeNewPost from "./homapegeNewPost.component"
import { HomePageWrapper, TodaysStoryWrapper, NewestPostWrapper } from "./homepage.styles"

const HomePage = () => {

  const TodaysStory = {
    img: 'https://assets3.thrillist.com/v1/image/3148428/600x400/flatten;crop;jpeg_quality=60.jpg',
    dest: 'https://www.thedodo.com/daily-dodo/clever-shelter-dog-discovers-a-unique-way-of-getting-attention',
    title: 'Clever Shelter Dog Discovers A Unique Way Of Getting Attention'
  }

  const NewestPosts = [
    {
      img: 'https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_640.jpg',
      dest: 'https://www.thedodo.com/daily-dodo/clever-shelter-dog-discovers-a-unique-way-of-getting-attention',
      title: 'Bob'
    },
    {
      img: 'https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_640.jpg',
      dest: 'https://www.thedodo.com/daily-dodo/clever-shelter-dog-discovers-a-unique-way-of-getting-attention',
      title: 'Juddy'
    },
    {
      img: 'https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_640.jpg',
      dest: 'https://www.thedodo.com/daily-dodo/clever-shelter-dog-discovers-a-unique-way-of-getting-attention',
      title: 'Bobby'
    },
    {
      img: 'https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_640.jpg',
      dest: 'https://www.thedodo.com/daily-dodo/clever-shelter-dog-discovers-a-unique-way-of-getting-attention',
      title: 'Chuddi'
    },
  ]

  return (
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
            NewestPosts.map((post) => (
              <HomapegeNewPost key={post.title} post={post}/>
            ))
          }
        </div>
      </NewestPostWrapper>
    </HomePageWrapper>
  )
}

export default HomePage