import { getAuth } from "firebase/auth";
import './App.css';
import app from "./firebase.init";

const auth = getAuth(app)

function App() {

  const handleEmail = (event) => {
    console.log(event.target.value)
  }
  // handle password
  const handlePassword = event =>{
    console.log(event.target.value)
  }
  // form submit handle
  const handleSubmitedForm = event => {
    console.log('form submited')
    event.preventDefault()
  }


  return (
    <div className="App">
      <h1>Firebase authentication with email and password</h1>
      <form onSubmit={handleSubmitedForm}>
        <input onBlur={handleEmail} type="email" name="" id="" />
        <input onBlur={handlePassword} type="password" name="" id="" />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default App;
