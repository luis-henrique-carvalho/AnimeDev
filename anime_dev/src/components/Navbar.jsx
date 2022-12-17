import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";

const Navbar = () => {
  const [search, setSearch] = useState();

  return (
    <nav>
      <div>
        <div>
          <h2>Anime.Dev</h2>
        </div>
        <div>
          <ul>
            <li>
              <Link to="/">Início</Link>
            </li>
            <li>
              <Link to="/">Lista</Link>
            </li>
            <li>
              <Link to="/">Gênero</Link>
            </li>
            <li>
              <Link to="/">Novos Episódios</Link>
            </li>
          </ul>
          <form>
            <input
              type="text"
              placeholder="Buscar"
              onSubmit={(e) => setSearch(e.target.value)}
              value={search}
            />
            <button type="submit"><BiSearchAlt/></button>
          </form>
        </div>
      </div>
      <div></div>
    </nav>
  );
};

export default Navbar;
