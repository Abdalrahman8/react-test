import Topbar from "./components/Topbar/Topbar";
import SinglePost from "./components/SinglePost/SinglePost";
import Home from "./pages/Home/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Write from "./pages/Write/Write";
import Settings from "./pages/Settings/Settings";
import Single from "./pages/Single/Single";
import Post from "./components/Post/Post";

function App() {
   const user = false;

   return (
      <Router>
         <Topbar />

         <Routes>
            <Route path="/" exact element={<Home />}></Route>
         </Routes>

         <Routes>
            <Route
               path="/Register"
               element={user ? <Home /> : <Register />}
            ></Route>
         </Routes>

         <Routes>
            <Route path="/Login" element={user ? <Home /> : <Login />}></Route>
         </Routes>

         <Routes>
            <Route path="/write" element={user ? <Write /> : <Write />}></Route>
         </Routes>

         <Routes>
            <Route
               path="/settings"
               element={user ? <Settings /> : <Register />}
            ></Route>
         </Routes>

         <Routes>
            <Route path="/post/:postId" element={<Single />}></Route>
         </Routes>
      </Router>
   );
}

export default App;
