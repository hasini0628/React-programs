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
