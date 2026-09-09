import { useState } from "react";
function App(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  function emailChange(event){
    setEmail(event.target.value);
  }
