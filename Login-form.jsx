import { useState } from "react";
function App(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  function emailChange(event){
    setEmail(event.target.value);
  }
  unction passwordChange(event){
    setPassword(event.target.value);
  }
  function login() {
    if(email==""|| password==""){
      setMessage("Please fill all the fields")
    }
    else{
      setMessage("Login successfull")
    }
}
return(
    <div>
      <h1>Login Form</h1>
      <h1>Email:</h1>
      <input type="email" value={email} onChange={emailChange}/>
      <h1>Password</h1>
      <input type="password" value={password} onChange={passwordChange}/>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
      <button onClick={login}>Login</button>
      <p>{message}</p>
    </div>
  )};
export default App;
