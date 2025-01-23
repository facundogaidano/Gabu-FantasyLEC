import React from 'react';

const DayColumn = ({ day, data, losers }) => {
  const needsGradient = (image, day) => {
    return losers[day - 1].includes(image);
  };

  return (
    <div className="row">
      {data.map((item) => (
        <div className="column" key={item.id}>
          {item.images.map((image, index) => (
            <div className={`cell-playoffs ${needsGradient(image, day) ? 'gradient-overlay' : ''}`} key={index}>
              <img src={image} alt={`Image ${item.id}-${index}`} />
              <span className="result">{item.results[index]}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default DayColumn;