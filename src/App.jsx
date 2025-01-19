import './App.css';
import './assets/fonts/fonts.css';
import ProfileRow from './components/ProfileRow';
import Week from './components/Week';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import lecImage from './assets/img/LEC.png';
import gabuImage from './assets/img/GabuEsports.png';
import Leaderboard from './components/Leaderboard';
import { week1Data, week2Data } from './components/Votes';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <div className="header">
            <img src={lecImage} alt="LEC" className="lec-image" />
            <ProfileRow />
            <img src={gabuImage} alt="GabuEsports" className="gabu-image" />
          </div>
          <div className="main-content">
            <Routes>
              <Route path="/week-1" element={
                <Week
                  weekNumber={1}
                  matches={week1Data.matches}
                  results={[week1Data.resultsDay1, week1Data.resultsDay2, week1Data.resultsDay3]}
                  losers={week1Data.losers}
                  players={week1Data.players}
                  imagenes={week1Data.imagenes}
                />}
              />
              <Route path="/week-2" element={
                <Week
                  weekNumber={2}
                  matches={week2Data.matches}
                  results={[week2Data.resultsDay1, week2Data.resultsDay2, week2Data.resultsDay3]}
                  losers={week2Data.losers}
                  players={week2Data.players}
                  imagenes={week2Data.imagenes}
                />}
              />
              <Route path="/" element={
                <div>
                  <h2>Bienvenido al Fantasy LEC</h2>
                  <p>Para ver los resultados de una semana, escriba en el buscador "/week-(Numero)".</p>
                </div>
              } />
            </Routes>
            <Leaderboard />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;