import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import App from './App.jsx';
import Week from './components/Week';
import Playoffs from './components/PlayOffs';
import { week1Data, week2Data, week3Data, playoffs1Data, playoffs2Data } from './components/Votes';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/Gabu-FantasyLEC/",
    element: <App />,
    children: [
      {
        path: "/Gabu-FantasyLEC/week-1",
        element: (
          <Week
            weekNumber={1}
            matches={week1Data.matches}
            results={[week1Data.resultsDay1, week1Data.resultsDay2, week1Data.resultsDay3]}
            losers={week1Data.losers}
            players={week1Data.players}
            imagenes={week1Data.imagenes}
          />
        ),
      },
      {
        path: "/Gabu-FantasyLEC/week-2",
        element: (
          <Week
            weekNumber={2}
            matches={week2Data.matches}
            results={[week2Data.resultsDay1, week2Data.resultsDay2, week2Data.resultsDay3]}
            losers={week2Data.losers}
            players={week2Data.players}
            imagenes={week2Data.imagenes}
          />
        ),
      },
      {
        path: "/Gabu-FantasyLEC/week-3",
        element: (
          <Week
            weekNumber={3}
            matches={week3Data.matches}
            results={[week3Data.resultsDay1, week3Data.resultsDay2, week3Data.resultsDay3]}
            losers={week3Data.losers}
            players={week3Data.players}
            imagenes={week3Data.imagenes}
          />
        ),
      },
      {
        path: "/Gabu-FantasyLEC/playoffs-1",
        element: (
          <Playoffs
            playoffsNumber={1}
            matches={playoffs1Data.matches}
            results={[playoffs1Data.resultsDay1, playoffs1Data.resultsDay2, playoffs1Data.resultsDay3]}
            losers={playoffs1Data.losers}
            players={playoffs1Data.players}
            imagenes={playoffs1Data.imagenes}
          />
        ),
      },
      {
        path: "/Gabu-FantasyLEC/playoffs-2",
        element: (
          <Playoffs
            playoffsNumber={2}
            matches={playoffs2Data.matches}
            results={[playoffs2Data.resultsDay1, playoffs2Data.resultsDay2, playoffs2Data.resultsDay3]}
            losers={playoffs2Data.losers}
            players={playoffs2Data.players}
            imagenes={playoffs2Data.imagenes}
          />
        ),
      },
      {
        path: "/Gabu-FantasyLEC/",
        element: (
          <div>
            <nav>
              <Link to="/Gabu-FantasyLEC/week-1">Week 1</Link>
              {" | "}
              <Link to="/Gabu-FantasyLEC/week-2">Week 2</Link>
              {" | "}
              <Link to="/Gabu-FantasyLEC/week-3">Week 3</Link>
              {" | "}
              <Link to="/Gabu-FantasyLEC/playoffs-1">Play Offs 1</Link>
              {" | "}
              <Link to="/Gabu-FantasyLEC/playoffs-2">Play Offs 2</Link>
            </nav>
            <h2>Bienvenido al Fantasy LEC</h2>
            <p>
              Para ver los resultados de una semana, toque en el navegador de arriba.
            </p>
            <p> 
              Los resultados del leaderboard refleja los puntos actuales.
            </p>
          </div>
        ),
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
