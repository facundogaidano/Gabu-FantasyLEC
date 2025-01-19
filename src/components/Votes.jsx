import week1 from '../assets/data/week1.json';
import week2 from '../assets/data/week2.json';

const imagenes = {
  "fnc": "/public/FNC.png",
  "g2": "/public/G2.png",
  "koi": "/public/KOI.png",
  "rge": "/public/RGE.png",
  "sk": "/public/SK.png",
  "vit": "/public/VIT.png",
  "gx": "/public/GX.png",
  "th": "/public/HRT.png",
  "kc": "/public/KC.png",
  "bds": "/public/BDS.png"
};

const mapVotesToImages = (votes) => {
  return votes.map(dayVotes => dayVotes.map(vote => imagenes[vote]));
};

const generateDayData = (week) => {
  const Day1 = week.players.map(player => ({
    id: player.id,
    name: player.name,
    images: mapVotesToImages(player.votes, week.imagenes)[0]
  }));

  const Day2 = week.players.map(player => ({
    id: player.id,
    name: player.name,
    images: mapVotesToImages(player.votes, week.imagenes)[1]
  }));

  const Day3 = week.players.map(player => ({
    id: player.id,
    name: player.name,
    images: mapVotesToImages(player.votes, week.imagenes)[2]
  }));

  return [Day1, Day2, Day3];
};

const week1Data = {
  ...week1,
  dayData: generateDayData(week1)
};

const week2Data = {
  ...week2,
  dayData: generateDayData(week2)
};

export { week1Data, week2Data };