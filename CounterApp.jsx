import { useState } from "react";
function App(){
  const [count, setCount] = useState(0);
  const [clicks, setClicks] = useState(0);
  const [decreaseClicks, setDecreaseClicks] = useState(0);
  function increase() {
    setCount(count + 1);
    setClicks(clicks +1);
  }
   function decrease() {
    setCount(count - 1); 
    setDecreaseClicks(decreaseClicks-1);  
  }
  function reset() {
    setCount(0);
    setDecreaseClicks(0);
  }
let message;
  if (count > 0){
    message="Positive number";
  }
  else if (count < 0){
    message="Negative number";
  }
  else if (count === 0){
    message="Count is zero";
  }
  
