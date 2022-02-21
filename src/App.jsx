import "./App.css";
import { Routes, Route } from "react-router-dom";
import SearchRes from "./components/SearchRes";
import { Home } from "./components/Home";
import { SearchPage } from "./components/SearchPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:res" element={<SearchRes />} />
        <Route path="/page/:id" element={<SearchPage />} />
      </Routes>
    </div>
  );
}

export default App;
