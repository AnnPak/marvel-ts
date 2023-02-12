import { useEffect } from "react";
import AppHeader from "../app-header/app-header";

import { HeroPage, Home } from "../pages/pages";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { fetchHeroes } from "../../store/slice";
import { useAppDispatch } from "../../store";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchHeroes());
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
