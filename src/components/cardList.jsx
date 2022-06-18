import React from "react";
import { Card } from "./card"
import './cardList.css'

export const CardList = ({info}) => {
    
  return (
    <div className="card-list">
      <h1 className="card-list-title">Ты сегодня покормил кота?</h1>
      <div className="card-list-wrapper">
      {info.map((el) => (
          <Card key={el.id} info={el} />
        ))}
      </div>
    </div>
  );
};
