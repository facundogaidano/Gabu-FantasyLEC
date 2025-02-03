import React from 'react';

const Leaderboard = () => {
  const players = [
    { name: 'MrFakon', points: [21,4+3+1] },
    { name: 'TakRiuto', points: [15,3+2+2] },
    { name: 'Isehnia', points: [15,1+5+2] },
    { name: 'Spike', points: [16,4+3+1] },
    { name: 'Damian', points: [22,4+5+1] },
    { name: 'Raledro', points: [18,4+3+1] },
    { name: 'Ursus', points: [20,3+2+1] },
    { name: 'Papelon', points: [16,4+2] },
    { name: 'Devmon', points: [13,4+3+1] },
    { name: 'Eduamen', points: [15,1+2+1] },
    { name: 'Joe', points: [16,5+1] },
    { name: 'Carlos', points: [19,4+5+1] },
    { name: 'Grimo', points: [0,4+3+2] }
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
