import React from 'react';

const VsColumn = ({ matches, results, losers }) => {
  const isLoser = (image) => {
    return losers.includes(image);
  };

  return (
    <div className="vs-column">
      {matches && matches.length > 0 && matches.map((match, index) => (
        <div className="vs-cell" key={index}>
          {match && match.length > 0 && (
            <>
              <div className={`cell ${isLoser(match[0]) ? 'gradient-overlay' : ''}`}>
                <img src={match[0]} alt={`Team ${index}-1`} />
              </div>
              <span className='vs-text'>
                {results[index] ? results[index] : 'VS'}
              </span>
              <div className={`cell ${isLoser(match[1]) ? 'gradient-overlay' : ''}`}>
                <img src={match[1]} alt={`Team ${index}-2`} />
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default VsColumn;