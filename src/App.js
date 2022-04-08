import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useState } from "react";
import "./App.css";
import app from "./firebase.init";

const auth = getAuth(app);

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  // handle password
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  // form submit handle
  const handleSubmitedForm = (event) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        console.log(error);
      });
    event.preventDefault();
  };

  return (
    <div className="App">
      <h1 className="title">Firebase authentication with Email and Password</h1>
      <div className="form_box">
        <h3>Please Resisterd!!!</h3>
        <form onSubmit={handleSubmitedForm}>
          <input className="input_field" onBlur={handleEmail} type="email" name="" id="" placeholder="Your Email" />
          <input className="input_field" onBlur={handlePassword} type="password" name="" id="" placeholder="Password"/>
          <input className="submit-btn" type="submit" value="Login"  />
        </form>
      </div>
    </div>
  );
}

export default App;
