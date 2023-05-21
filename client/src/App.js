import { Route, Routes } from "react-router-dom";
import { UserContext } from "./contexts/user.context";
import { useContext } from "react";

import SignInPage from "./routes/sign-in-page.route";
import Navigation from "./components/navigation/navigation.component";
import Home from "./routes/home.route";
import ListingPage from "./routes/listings.route";
import UserProfile from "./routes/profile.route";
import StoryBoardPage from "./routes/story-board-page.route";
import Create from "./routes/create.route";

function App() {
  const { user } = useContext(UserContext);

  return (
    <Routes>
      <Route path="/" element={<SignInPage />}/>
        {user && <Route path="/app" element={<Navigation />}> 
          <Route index element={<Home />}/>
          <Route path="story-board" element={<StoryBoardPage />}/>
          <Route path="listings" element={<ListingPage />}/>
          <Route path="profile">
            <Route index element={<UserProfile />}/>
            <Route path="create" element={<Create />}/>
          </Route>
        </Route> }
        <Route path="/*" element={<SignInPage />}/>   
    </Routes>
  );
}

export default App;
