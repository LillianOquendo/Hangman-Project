import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "./Form";


function HomePage({setPlayable}) {
  setPlayable(false)
  const [submittedName, setSubmittedName] = useState("");
  const navigate = useNavigate();

  const handleNameSubmit = (name) => {
    setSubmittedName(name);
    // Perform any other logic with the submitted name
  };

  const handleClick = () => {
    console.log("Start Button Clicked");
    navigate("/game"); // Navigate to the "/game" route
  };

  return (
    <section id="home">
    
      <h1 className="title">HANGMAN</h1>
      <br />
      <div>
        <Form onSubmit={handleNameSubmit}/>
        {submittedName && <h3 style={{ color: '#000000' }}>Hey {submittedName}! Let's Play Some Hangman!</h3>}
      </div>
      <br />
      <button onClick={handleClick} className="start-button">
        Start
      </button>
    </section>
  );
}

export default HomePage;
