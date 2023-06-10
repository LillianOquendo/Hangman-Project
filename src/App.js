// to-do
//1. post request for user name
// -create a form with an onSubmit e-listner
//-render name submitted on form onto the page
//requirement #3
//get > handled by API call
//possible stretch goal >Leaderboard



import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import GamePage from './components/GamePage';
import NavBar from './components/NavBar';
import Leaderboard from './components/LeaderBoard';
import './Ap.css';



function App() {
  const [playable, setPlayable] = useState(true);

  const [selectedWord, setSelectedWord] = useState('');
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  
  //create a useEffect that connects to the db.json and prints the player name

  useEffect(() => {
    fetch('https://random-word-api.herokuapp.com/word')
      .then((response) => response.json())
      .then((data) => {

        console.log(data)
        setSelectedWord(data[Math.floor(Math.random() * data.length)]);
        console.log(selectedWord)
      });
  }, []);


  useEffect(() => {
    const keyPress = (event) => {
      const { key, keyCode } = event;
      const letter = key.toLowerCase();

      if (playable && keyCode >= 65 && keyCode <= 90) {
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((currentLetters) => [...currentLetters, letter]);
          }

        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((currentLetters) => [...currentLetters, letter]);
          }
        }
      }
    };

    window.addEventListener('keydown', keyPress);
    return () => window.removeEventListener('keydown', keyPress);
}, [correctLetters, wrongLetters, playable, selectedWord]);

  return (
    <div className='game-container'>
   


      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={<HomePage setPlayable={setPlayable}/>}/>
          <Route path='/game' element={<GamePage 
          selectedWord={selectedWord}
          correctLetters={correctLetters}
          wrongLetters={wrongLetters}
          setPlayable={setPlayable}/>}/>

        <Route path="/leaderboard" element={<Leaderboard setPlayable={setPlayable} />} />
        </Routes>
      </BrowserRouter>

     
    </div>


  )
}

export default App
