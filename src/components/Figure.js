import React from 'react';

const Figure = ({ wrongLetters }) => {
  const errors = wrongLetters.length;

  return (
    <div className='figure-container'>
      <svg height="500" width="400" className="figure-container">
        {/* <!-- Rod --> */}
        <line x1="120" y1="40" x2="280" y2="40" strokeWidth="8" />
        <line x1="280" y1="40" x2="280" y2="100" strokeWidth="8" />
        <line x1="120" y1="40" x2="120" y2="460" strokeWidth="8" />
        <line x1="40" y1="460" x2="200" y2="460" strokeWidth="8" />

        {/* <!-- Head --> */}
        {errors > 0 && (
          <circle cx="280" cy="140" r="40" strokeWidth="8" />
        )}

        {/* <!-- Body --> */}
        {errors > 1 && (
          <line x1="280" y1="180" x2="280" y2="300" strokeWidth="8" />
        )}

        {/* <!-- Arms --> */}
        {errors > 2 && (
          <line x1="280" y1="240" x2="240" y2="200" strokeWidth="8" />
        )}
        {errors > 3 && (
          <line x1="280" y1="240" x2="320" y2="200" strokeWidth="8" />
        )}

        {/* <!-- Legs --> */}
        {errors > 4 && (
          <line x1="280" y1="300" x2="240" y2="360" strokeWidth="8" />
        )}
        {errors > 5 && (
          <line x1="280" y1="300" x2="320" y2="360" strokeWidth="8" />
        )}
      </svg>
    </div>
  );
};

export default Figure;
