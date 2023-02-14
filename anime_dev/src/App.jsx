import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import './App.css'
import AnimeDetails from "./pages/AnimeDetails";
import AnimeSearch from './pages/AnimeSearch'

function App() {
  return (
    <div className="Container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="search" element={<AnimeSearch/>}/>
          <Route path="/anime/:id" element={<AnimeDetails/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
