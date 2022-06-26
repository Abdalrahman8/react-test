// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Topbar.scss";

export default function Topbar() {
   const user = false;

   return (
      <div className="top">
         <div className="topLeft">
            <i className="topIcon fab fa-facebook-square"></i>
            <i className="topIcon fab fa-instagram-square"></i>
            <i className="topIcon fab fa-pinterest-square"></i>
            <i className="topIcon fab fa-twitter-square"></i>
         </div>
         <div className="topCenter">
            <ul className="topList">
               <li className="topListItem">
                  <Link to="/" className="link">
                     Home
                  </Link>
               </li>
               <li className="topListItem">
                  <Link to="/about" className="link">
                     About
                  </Link>
               </li>
               <li className="topListItem">
                  <Link to="/contact" className="link">
                     Contact
                  </Link>
               </li>
               <li className="topListItem">
                  <Link to="/write" className="link">
                     Write
                  </Link>
               </li>
               <li className="topListItem">{user && "LOGOUT"}</li>
            </ul>
         </div>

         <div className="topRight">
            {user ? (
               <img
                  className="topImg"
                  src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
               />
            ) : (
               <ul className="topList">
                  <li className="topListItem">
                     <Link to="/login" className="link">
                        Login
                     </Link>
                  </li>
                  <li className="topListItem">
                     <Link to="/register" className="link">
                        Register
                     </Link>
                  </li>
               </ul>
            )}
            <i className="topSearchIcon fas fa-search"></i>
         </div>
      </div>
   );
}
