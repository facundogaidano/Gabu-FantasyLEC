import '../App.css';
import '../assets/fonts/fonts.css';
import React from 'react';
import DayColumnPlayoffs from './DayColumnPlayoffs';
import VsColumn from './VsColumn';

const Playoffs = ({ playoffsNumber, matches, results, losers, players, imagenes }) => {
  const mapVotesToImages = (votes) => {
    return votes.map(dayVotes => dayVotes.map(vote => imagenes[vote]));
  };

  const mapResultsVotes = (resultsVotes) => {
    return resultsVotes.map(dayResults => dayResults);
  };

  const Day1 = players.map(player => ({
    id: player.id,
    name: player.name,
    images: mapVotesToImages(player.votes)[0],
    results: mapResultsVotes(player.resultsVotes)[0]
  }));

  const Day2 = players.map(player => ({
    id: player.id,
    name: player.name,
    images: mapVotesToImages(player.votes)[1],
    results: mapResultsVotes(player.resultsVotes)[1]
  }));

  const Day3 = players.map(player => ({
    id: player.id,
    name: player.name,
    images: mapVotesToImages(player.votes)[2],
    results: mapResultsVotes(player.resultsVotes)[2]
  }));

  return (
    <div className={`main-content playoffs-${playoffsNumber}`}>
      <div className="vs-playoffs-columns">
        <VsColumn matches={matches[0]} results={results[0]} losers={losers[0]} />
        <VsColumn matches={matches[1]} results={results[1]} losers={losers[1]} />
        <VsColumn matches={matches[2]} results={results[2]} losers={losers[2]} />
      </div>
      <div className="day-playoffs-container">
        <DayColumnPlayoffs day={1} data={Day1} losers={losers} />
        <DayColumnPlayoffs day={2} data={Day2} losers={losers} />
        <DayColumnPlayoffs day={3} data={Day3} losers={losers} />
      </div>
    </div>
  );
};

export default Playoffs;