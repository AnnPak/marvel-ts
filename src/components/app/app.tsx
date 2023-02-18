import { useEffect } from "react";
import AppHeader from "../app-header/app-header";

import { HeroPage, Home } from "../pages/pages";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { fetchHero, fetchHeroes } from "../../store/heroes";
import { useAppDispatch } from "../../store";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchHeroes());

    const timerGetHero = setTimeout(() => {
      dispatch(fetchHero());
    }, 2000);

    const intervalGetHero = setInterval(() => dispatch(fetchHero()), 26000);

    return () => {
      clearInterval(intervalGetHero);
      clearTimeout(timerGetHero);
    };
  }, [dispatch]);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="app">
        <AppHeader />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hero/:heroId" element={<HeroPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
