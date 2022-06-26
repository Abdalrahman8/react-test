import Post from "../../components/Post/Post";
import Sidebar from "../../components/Sidebar/Sidebar";
import SinglePost from "../../components/SinglePost/SinglePost";
import "./Single.scss";

export default function Single() {
   return (
      <div className="single">
         <SinglePost />
         <Sidebar />
      </div>
   );
}
