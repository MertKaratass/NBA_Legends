import React from "react";
import PlayerCard from "./PlayerCard";

const CardContainer = ({ searchText }) => {
  return (
    <div className="card-container">
      <PlayerCard searchText={searchText} /> {/* searchText prop'unu ekledik */}
    </div>
  );
};

export default CardContainer;
