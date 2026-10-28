import { useState } from "react";
function App() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
 function passwordChange(event) {
    setPassword(event.target.value);
  }
  function togglePassword() {
    setShowPassword(!showPassword);
  }
