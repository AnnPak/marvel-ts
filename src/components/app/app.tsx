import AppHeader from "../app-header/app-header";

import { Home } from "../pages/pages";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <AppHeader />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
