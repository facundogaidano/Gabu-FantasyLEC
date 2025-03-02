import React from 'react';

const Leaderboard = () => {
  const players = [
    { name: 'MrFakon', points: [39,1,4,3,3] },
    { name: 'TakRiuto', points: [32,3,1,1,3,1] },
    { name: 'Isehnia', points: [32,1,1,3,3] },
    { name: 'Spike', points: [32,6,2,3,1,1] },
    { name: 'Damian', points: [43,1,4,1,0,1] },
    { name: 'Raledro', points: [35,1,1,3,1,3] },
    { name: 'Ursus', points: [39,0,1,1,3,1] },
    { name: 'Papelon', points: [33,4,2,3,3,1] },
    { name: 'Devmon', points: [28,4,4,1,0,3] },
    { name: 'Eduamen', points: [24,3,4,3,0,1] },
    { name: 'Joe', points: [29,3,6,1,3,3] },
    { name: 'Carlos', points: [39,6,4,1,3,1] },
    { name: 'Grimo', points: [14,4,1,1,1,1] }
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
