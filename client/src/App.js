import { Route, Routes } from "react-router-dom";
import { UserContext } from "./contexts/user.context";
import { useContext } from "react";

import SignInPage from "./routes/sign-in-page.route";
import Navigation from "./components/navigation/navigation.component";
import Home from "./routes/home.route";
import ListingPage from "./routes/listing-page.route";
import YourListingsPage from "./routes/your-listings-page.route";
import StoryBoardPage from "./routes/story-board-page.route";

function App() {
  const { user } = useContext(UserContext);

  return (
    <Routes>
      <Route path="/" element={<SignInPage />}/>
      {user &&
        <Route path="/app" element={<Navigation />}> 
          <Route index element={<Home />}/>
          <Route path="listings" element={<ListingPage />}/>
          <Route path="your-listings" element={<YourListingsPage />}/>
          <Route path="story-board" element={<StoryBoardPage />}/>
        </Route> 
      }
      <Route path="/*" element={<SignInPage />}/>
    </Routes>
  );
}

export default App;
