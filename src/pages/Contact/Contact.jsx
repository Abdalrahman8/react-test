import "./Contact.scss";

export default function Contact() {
   return (
      <div className="register">
         <span className="registerTitle">Contact</span>
         <form className="registerForm">
            <label>Username</label>
            <input
               className="registerInput"
               type="text"
               placeholder="Enter your username..."
            />
            <label>Email</label>
            <input
               className="registerInput"
               type="text"
               placeholder="Enter your email..."
            />
            <label>Password</label>
            <input
               className="registerInput"
               type="password"
               placeholder="Enter your password..."
            />
            <button className="registerButton">Contact</button>
         </form>
      </div>
   );
}
