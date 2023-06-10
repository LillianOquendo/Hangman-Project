import React from 'react';
import Header from './Header';
import Figure from './Figure';
import WrongLetters from './WrongLetters';
import Word from './Word';



function GamePage({selectedWord, correctLetters, wrongLetters, setPlayable}) {
  setPlayable(true)
  return (
    <div>
     
      <Header />
      <Figure wrongLetters={wrongLetters} />
      <WrongLetters wrongLetters={wrongLetters}/>
      <Word selectedWord={selectedWord} correctLetters={correctLetters}/>
    </div>
  );
}

export default GamePage;
