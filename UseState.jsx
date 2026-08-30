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
