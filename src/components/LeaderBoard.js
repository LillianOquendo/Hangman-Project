import React, { useState, useEffect } from 'react';


const Leaderboard = ({setPlayable}) => {
  setPlayable(false)
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/leaderBoard')
      .then((response) => response.json())
      .then((data) => {
        setPlayers(data);
      });
  }, []);

  const AddPlayerName = (formData) => {
    // Create a new player
    const newPlayer = {
      name: formData.name.toLowerCase(),
      highscore: formData.highscore,
    };

    fetch('http://localhost:3000/leaderBoard', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPlayer),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data); 
          console.log(newPlayer);
        });
      };
      

  const NameForm = () => {
    const [name, setName] = useState('');
    const [highscore, setHighscore] = useState('');

    const handleSubmit = (event) => {
      event.preventDefault();
      const formData = {
        name: event.target.name.value,
        highscore: highscore,
      };
      AddPlayerName(formData);
      setName(''); // Reset the name input after submission
      setHighscore(''); // Reset the highscore input after submission
    };

    return (
      <form onSubmit={handleSubmit}
      autoComplete = "off">
        <br></br>
        <h3 className='cheater' >Cheaters Corner!</h3>
        <h4 style={{ color: '#820411' }}>Input your name and highscore 
          <br></br>
          and put yourself on our leaderboard</h4>
        <label style={{ marginBottom: '10px', color: '#000000' }}>
  Name: 
  <input
    type="text"
    placeholder="Type name here"
    value={name}
    onChange={(e) => setName(e.target.value)}
    name="name"
  />
</label>
<br></br>
<br></br>
        <label style={{ marginBottom: '50px', color: '#000000' }}>
          Highscore: 
          <input
            type="text"
            placeholder="Type highscore here"
            value={highscore}
            onChange={(e) => setHighscore(e.target.value)}
            name="highscore"
          />
        </label>
        <br></br>
        <br></br>
        <button className='cheater-button' type="submit">Submit</button>
      </form>
    );
  };

  return (
    <div>

      <h2 classname='leaderboard-title'style={{color:'#820411'}}>Leaderboard</h2>
      <ol style={{color:'#000000'}}>
        {players.map((player) => (
          <li key={player.id}>
          <span style={{ color: '#a20515' }}>{player.name}:</span> <span style={{ color: '#000000' }}>{player.highscore}</span>
        </li>
        ))}
      </ol>
      <NameForm />
    </div>
  );
};

export default Leaderboard;
