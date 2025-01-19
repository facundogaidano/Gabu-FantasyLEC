import week1 from '../assets/data/week1.json';
import week2 from '../assets/data/week2.json';

const imagenes = {
  fnc: 'img/FNC.png',
  g2: 'img/G2.png',
  koi: 'img/KOI.png',
  rge: 'img/RGE.png',
  sk: 'img/SK.png',
  vit: 'img/VIT.png',
  gx: 'img/GX.png',
  th: 'img/HRT.png',
  kc: 'img/KC.png',
  bds: 'img/BDS.png',
};

const mapVotesToImages = (votes, imagenes) => {
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