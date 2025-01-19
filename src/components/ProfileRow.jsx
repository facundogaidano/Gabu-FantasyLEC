import React from 'react';

const profiles = [
  { id: 1, name: 'MrFakon', img: 'https://cdn.discordapp.com/avatars/228317118733615104/9e7bc17dcc4591abb7f35113afcd072d.png?size=4096' },
  { id: 2, name: 'TakRiuto', img: 'https://cdn.discordapp.com/avatars/210674145682391040/ce0c616ad838cb35555dfabaa4b89dfc.png?size=4096' },
  { id: 3, name: 'Isehnia', img: 'https://cdn.discordapp.com/avatars/125695562891657217/e94bdfefd4b8a728866a913f5bce32b8.png?size=4096' },
  { id: 4, name: 'Spike', img: 'https://cdn.discordapp.com/avatars/219642263528013835/a5537f0b9f5d62b0a1a977752faeed4f.png?size=4096' },
  { id: 5, name: 'Damian', img: 'https://cdn.discordapp.com/avatars/561683286527574036/5b6a51c3ba9615cbbd29c34306d128ec.png?size=4096' },
  { id: 6, name: 'Raledro', img: 'https://cdn.discordapp.com/avatars/262291883147919371/a35ccb1adcf0c98b5b68b3e020703bfe.png?size=4096' },
  { id: 7, name: 'Ursus', img: 'https://cdn.discordapp.com/avatars/315255306571612161/a_8e5cd70f5e6c2174b0d4885d4d0f2a9d.png?size=4096' },
  { id: 8, name: 'Papelon', img: 'https://cdn.discordapp.com/avatars/479849242777878548/20f5bde9679f11901346e60801665445.png?size=4096' },
  { id: 9, name: 'Devmon', img: 'https://cdn.discordapp.com/avatars/180919216394862592/574683f310d0a9f269e21b82e76a6e62.png?size=4096' },
  { id: 10, name: 'Eduamen', img: 'https://cdn.discordapp.com/avatars/310865371328413706/13e1546ad45fe28fb7dcb34f8d9e232d.png?size=4096' },
  { id: 11, name: 'Joe', img: 'https://cdn.discordapp.com/avatars/535849647952887809/3104ddad93a200dbfc391cc521ddd5ec.png?size=4096' },
  { id: 12, name: 'Carlos', img: 'https://cdn.discordapp.com/avatars/119943961375801344/d9eaa327951ae9ca3f5959d64cc63180.png?size=4096' },
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