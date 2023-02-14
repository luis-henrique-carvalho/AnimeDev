import React from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import styles from "./Navbar.module.css";
import SecundaryNav from "./SecundaryNav";

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [search, setSearch] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/search?q=" + search);
  }

  return (
    <header
      className={
        pathname === "/"
          ? `${styles.nav__container}`
          : `${styles.nav__container_tercery}`
      }
    >
      <nav className={styles.nav__container_primary}>
        <div>
          <Link to="/">
            <h1>Anime.Dev</h1>
          </Link>
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
              <Link to="/">Gêneros</Link>
            </li>
            <li>
              <Link to="/">Novos Episódios</Link>
            </li>
          </ul>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Buscar"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            <button type="submit">
              <BiSearchAlt />
            </button>
          </form>
        </div>
      </nav>
      {pathname === "/" ? <SecundaryNav /> : <></>}
    </header>
  );
};

export default Navbar;
