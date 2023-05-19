import { Route, Routes } from "react-router-dom";

import Home from "./routes/home.route";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      {/* <Route path="/app" element={<Navigation />}> 
        <Route index element={<Home />}/>
        <Route path="shop/*" element={<Shop />}/>
        <Route path="checkout" element={<CheckOut />}/> 
      </Route>  */}
    </Routes>
  );
}

export default App;
