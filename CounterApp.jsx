import { useState } from "react";
function App(){
  const [count, setCount] = useState(0);
  const [clicks, setClicks] = useState(0);
  const [decreaseClicks, setDecreaseClicks] = useState(0);
  function increase() {
    setCount(count + 1);
    setClicks(clicks +1);
  }
