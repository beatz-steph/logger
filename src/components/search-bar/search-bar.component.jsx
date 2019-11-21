import React, { useState } from "react";

import "./search-bar.styles.scss";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  const handleChange = event => {
    setSearch(event.target.value);
  };

  return (
    <div className="search-bar">
      <input
        className="search-bar__input"
        value={search}
        onChange={handleChange}
        placeholder="search workers or division or departments"
      />
      <div className="search-bar__icon">
        <ion-icon className="icon-search" name="search"></ion-icon>
      </div>
    </div>
  );
};

export default SearchBar;
