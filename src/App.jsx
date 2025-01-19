import { Outlet } from "react-router-dom";
import './App.css';
import './assets/fonts/fonts.css';
import ProfileRow from './components/ProfileRow';
import lecImage from './assets/LEC.png';
import gabuImage from './assets/GabuEsports.png';
import Leaderboard from './components/Leaderboard';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <img src={lecImage} alt="LEC" className="lec-image" />
          <ProfileRow />
          <img src={gabuImage} alt="GabuEsports" className="gabu-image" />
        </div>
        <div className="main-content">
          <Outlet />
          <Leaderboard />
        </div>
      </div>
    </div>
  );
}