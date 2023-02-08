import { useEffect } from "react";
import AppHeader from "../app-header/app-header";

import { Home } from "../pages/pages";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { fetchHeroes } from "../../store/slice";
import { useAppDispatch } from "../../store";

const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchHeroes());
  }, []);
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="app">
        <AppHeader />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
