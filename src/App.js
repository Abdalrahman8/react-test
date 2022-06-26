import Topbar from "./components/Topbar/Topbar";
import Home from "./pages/Home/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Write from "./pages/Write/Write";
import Settings from "./pages/Settings/Settings";
import Single from "./pages/Single/Single";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

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

         <Routes>
            <Route path="/About" element={<About />}></Route>
         </Routes>

         <Routes>
            <Route path="/Contact" element={<Contact />}></Route>
         </Routes>
      </Router>
   );
}

export default App;
