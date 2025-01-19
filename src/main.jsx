import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import App from './App.jsx';
import Week from './components/Week';
import { week1Data, week2Data } from './components/Votes';
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
        path: "/Gabu-FantasyLEC/",
        element: (
          <div>
            <nav>
              <Link to="/Gabu-FantasyLEC/week-1">Week 1</Link>
              {" | "}
              <Link to="/Gabu-FantasyLEC/week-2">Week 2</Link>
            </nav>
            <h2>Bienvenido al Fantasy LEC</h2>
            <p>
              Para ver los resultados de una semana, escriba en el buscador
              "/week-(Numero)".
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
