import React, { useState } from 'react';

const NameForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [submittedName, setSubmittedName] = useState(''); 
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(name);
    setSubmittedName(name); 
  };

  return (
    <div>
      <form className='home-form' onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" placeholder="type name here" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <button className='submit-button' type="submit">Submit</button>
      </form>
      
    </div>
  );
};

export default NameForm;
