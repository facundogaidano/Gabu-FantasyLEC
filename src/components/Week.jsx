import '../App.css';
import '../assets/fonts/fonts.css';
import React from 'react';
import DayColumn from './DayColumn';
import VsColumn from './VsColumn';

const Week = ({ weekNumber, matches, results, losers, players, imagenes }) => {
  const mapVotesToImages = (votes) => {
    return votes.map(dayVotes => dayVotes.map(vote => imagenes[vote]));
  };

  const Day1 = players.map(player => ({
    id: player.id,
    name: player.name,
    images: mapVotesToImages(player.votes)[0]
  }));

  const Day2 = players.map(player => ({
    id: player.id,
    name: player.name,
    images: mapVotesToImages(player.votes)[1]
  }));

  const Day3 = players.map(player => ({
    id: player.id,
    name: player.name,
    images: mapVotesToImages(player.votes)[2]
  }));

  return (
    <div className={`main-content week-${weekNumber}`}>
      <div className="vs-columns">
        <VsColumn matches={matches[0]} results={results[0]} losers={losers[0]} />
        <VsColumn matches={matches[1]} results={results[1]} losers={losers[1]} />
        <VsColumn matches={matches[2]} results={results[2]} losers={losers[2]} />
      </div>
      <div className="day-container">
        <DayColumn day={1} data={Day1} losers={losers} />
        <DayColumn day={2} data={Day2} losers={losers} />
        <DayColumn day={3} data={Day3} losers={losers} />
      </div>
    </div>
  );
};

export default Week;