import React from 'react';

const Leaderboard = () => {
  const players = [
    { name: 'MrFakon', points: [21,4] },
    { name: 'TakRiuto', points: [15,3] },
    { name: 'Isehnia', points: [15,1] },
    { name: 'Spike', points: [16,4] },
    { name: 'Damian', points: [22,4] },
    { name: 'Raledro', points: [18,4] },
    { name: 'Ursus', points: [20,3] },
    { name: 'Papelon', points: [16,4] },
    { name: 'Devmon', points: [13,4] },
    { name: 'Eduamen', points: [15,1] },
    { name: 'Joe', points: [16,5] },
    { name: 'Carlos', points: [19,4] },
    { name: 'Grimo', points: [0,4] }
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
