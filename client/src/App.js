import { Route, Routes } from "react-router-dom";
import { UserContext } from "./contexts/user.context";
import { useContext } from "react";

import SignInPage from "./routes/sign-in-page.route";
import Navigation from "./components/navigation/navigation.component";
import Home from "./routes/home.route";

function App() {
  const { user } = useContext(UserContext);

  return (
    <Routes>
      <Route path="/" element={<SignInPage />}/>
      {user &&
        <Route path="/app" element={<Navigation />}> 
          <Route index element={<Home />}/>
            {/* <Route path="shop/*" element={<Shop />}/>
            <Route path="checkout" element={<CheckOut />}/>  */}
        </Route> 
      }
      <Route path="/*" element={<SignInPage />}/>
    </Routes>
  );
}

export default App;
