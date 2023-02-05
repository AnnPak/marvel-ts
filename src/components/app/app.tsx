import AppHeader from "../app-header/app-header";
import AppBanner from "../app-banner/app-banner";

import { Home } from "../pages/pages";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <AppHeader />
      <main>
        <AppBanner />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
