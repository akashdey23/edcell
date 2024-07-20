import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import SignUp from "./Components/SignUp.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Navbar />
      <div className="container">
        
        <SignUp />
      </div>
    </>
  );
}

export default App;
