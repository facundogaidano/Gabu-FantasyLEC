import week1 from '../assets/data/week1.json';
import week2 from '../assets/data/week2.json';

const imagenes = {
  "fnc": "/Gabu-FantasyLEC/public/FNC.png",
  "g2": "/Gabu-FantasyLEC/public/G2.png",
  "koi": "/Gabu-FantasyLEC/public/KOI.png",
  "rge": "/Gabu-FantasyLEC/public/RGE.png",
  "sk": "/Gabu-FantasyLEC/public/SK.png",
  "vit": "/Gabu-FantasyLEC/public/VIT.png",
  "gx": "/Gabu-FantasyLEC/public/GX.png",
  "th": "/Gabu-FantasyLEC/public/HRT.png",
  "kc": "/Gabu-FantasyLEC/public/KC.png",
  "bds": "/Gabu-FantasyLEC/public/BDS.png"
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