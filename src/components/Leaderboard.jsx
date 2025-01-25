import React from 'react';

const Leaderboard = () => {
  const players = [
    { name: 'MrFakon', points: [2,3,4,3] },
    { name: 'TakRiuto', points: [2,2,3,3] },
    { name: 'Isehnia', points: [1,3,4,2] },
    { name: 'Spike', points: [0,2,4,3] },
    { name: 'Damian', points: [2,3,4,4] },
    { name: 'Raledro', points: [2,1,3,4] },
    { name: 'Ursus', points: [3,2,2,4] },
    { name: 'Papelon', points: [0,3,3,4] },
    { name: 'Devmon', points: [2,3,3,1] },
    { name: 'Eduamen', points: [2,2,4,2] },
    { name: 'Joe', points: [0,4,3,3] },
    { name: 'Carlos', points: [0,3,3,3] },
  ];

  const playersWithTotalPoints = players.map(player => ({
    ...player,
    totalPoints: player.points.reduce((acc, curr) => acc + curr, 0)
  }));

  const sortedPlayers = playersWithTotalPoints.sort((a, b) => b.totalPoints - a.totalPoints);

  let currentRank = 1;
  let previousPoints = null;
  let rankCount = 0;

  return (
    <div className="leaderboard">
      <h2>LEADERBOARD</h2>
      <ul>
        {sortedPlayers.map((player, index) => {
          if (player.totalPoints !== previousPoints) {
            currentRank += rankCount;
            rankCount = 1;
          }
          previousPoints = player.totalPoints;

          let className = '';
          if (currentRank === 1) {
            className = 'gold';
          } else if (currentRank === 2) {
            className = 'silver';
          } else if (currentRank === 3) {
            className = 'bronze';
          }

          return (
            <li key={index} className={`leaderboard-item ${className}`}>
              <div className='points'>{player.totalPoints}</div> {player.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Leaderboard;
