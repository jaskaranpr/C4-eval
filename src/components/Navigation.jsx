import React from "react";
import { SearchBox } from "./searchBox";

export const Navigation = ({ getData }) => {
  return (
    <nav
      id="navbar"
      style={{
        background: "#4d4d4d7f",
      }}
    >
      <SearchBox getData={getData} btn={true} />
    </nav>
  );
};
