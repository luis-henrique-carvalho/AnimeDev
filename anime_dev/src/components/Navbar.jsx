import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import styles from './Navbar.module.css'

const Navbar = () => {
  const [search, setSearch] = useState();

  return (
    <nav className={styles.nav__container}>
      <div className={styles.nav__container_primary}>
        <div>
          <h2>Anime.Dev</h2>
        </div>
        <div className={styles.nav__primary_links}>
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
