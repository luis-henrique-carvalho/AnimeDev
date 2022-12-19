import React, { useState } from "react";
import styles from "./SecundaryNav.module.css";

import Button from "./Button";

const SecundaryNav = () => {
  const [search, setSearch] = useState();
  console.log(search);
  return (
    <nav className={styles.nav}>
      <div className={styles.navbar}>
        <Button value={"Todos"} setSearch={setSearch} />
        <Button value={"A"} setSearch={setSearch} />
        <Button value={"B"} setSearch={setSearch} />
        <Button value={"D"} setSearch={setSearch} />
        <Button value={"E"} setSearch={setSearch} />
        <Button value={"F"} setSearch={setSearch} />
        <Button value={"G"} setSearch={setSearch} />
        <Button value={"H"} setSearch={setSearch} />
        <Button value={"I"} setSearch={setSearch} />
        <Button value={"J"} setSearch={setSearch} />
        <Button value={"K"} setSearch={setSearch} />
        <Button value={"L"} setSearch={setSearch} />
        <Button value={"M"} setSearch={setSearch} />
        <Button value={"N"} setSearch={setSearch} />
        <Button value={"O"} setSearch={setSearch} />
        <Button value={"P"} setSearch={setSearch} />
        <Button value={"Q"} setSearch={setSearch} />
        <Button value={"R"} setSearch={setSearch} />
        <Button value={"S"} setSearch={setSearch} />
        <Button value={"T"} setSearch={setSearch} />
        <Button value={"U"} setSearch={setSearch} />
        <Button value={"V"} setSearch={setSearch} />
        <Button value={"X"} setSearch={setSearch} />
        <Button value={"Y"} setSearch={setSearch} />
        <Button value={"Z"} setSearch={setSearch} />
      </div>
    </nav>
  );
};

export default SecundaryNav;
