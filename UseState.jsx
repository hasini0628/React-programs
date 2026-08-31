import { useState } from "react";
function App(){
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  function nameChange(event){
    setName(event.target.value);
  }
   function ageChange(event){
    setAge(event.target.value);
  }
 return(
    <div>
      <h1>My profile</h1>
      <h1>Name:</h1>
      <input type="text" value={name}onChange={nameChange}/>
      <h1>Age</h1>
