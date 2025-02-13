import React from 'react';

const profiles = [
  { id: 1, name: 'MrFakon', img: 'https://cdn.discordapp.com/avatars/228317118733615104/9e7bc17dcc4591abb7f35113afcd072d.png?size=4096' },
  { id: 2, name: 'TakRiuto', img: 'https://cdn.discordapp.com/avatars/210674145682391040/42a235d48d1eecde28d16b3a12e9acc0?size=1024' },
  { id: 3, name: 'Isehnia', img: 'https://cdn.discordapp.com/avatars/125695562891657217/e94bdfefd4b8a728866a913f5bce32b8.png?size=4096' },
  { id: 4, name: 'Spike', img: 'https://cdn.discordapp.com/avatars/219642263528013835/a5537f0b9f5d62b0a1a977752faeed4f.png?size=4096' },
  { id: 5, name: 'Damian', img: 'https://cdn.discordapp.com/avatars/561683286527574036/10d66cedc45de65bd73310277c41208f.png?size=4096' },
  { id: 6, name: 'Raledro', img: 'https://cdn.discordapp.com/avatars/262291883147919371/686ac9c44d3bf684cf330aebfef8a09a.png?size=4096' },
  { id: 7, name: 'Ursus', img: 'https://cdn.discordapp.com/avatars/315255306571612161/a_8e5cd70f5e6c2174b0d4885d4d0f2a9d.png?size=4096' },
  { id: 8, name: 'Papelon', img: 'https://cdn.discordapp.com/avatars/479849242777878548/a84b6758165eb26450053681724eced1?size=1024' },
  { id: 9, name: 'Devmon', img: 'https://cdn.discordapp.com/avatars/180919216394862592/574683f310d0a9f269e21b82e76a6e62.png?size=4096' },
  { id: 10, name: 'Eduamen', img: 'https://cdn.discordapp.com/avatars/310865371328413706/13e1546ad45fe28fb7dcb34f8d9e232d.png?size=4096' },
  { id: 11, name: 'Joe', img: 'https://cdn.discordapp.com/avatars/535849647952887809/676d08db4d8c87f42bffdd838975de0e.png?size=4096' },
  { id: 12, name: 'Carlos', img: 'https://cdn.discordapp.com/avatars/119943961375801344/d9eaa327951ae9ca3f5959d64cc63180.png?size=4096' },
  { id: 13, name: "Grimo", img: 'https://cdn.discordapp.com/avatars/359209826124824576/25ba5210ab186095d7c4d18593a9d080.png?size=4096'}
]

const ProfileRow = () => {
  return (
    <div className="row">
      {profiles.map((item) => (
        <div className="cell profile" key={item.id}>
          <img src={item.img} alt={`Profile ${item.id}`} />
        </div>
      ))}
    </div>
  );
};

export default ProfileRow;