import React, { useState } from "react";
import Cat from "../img/Cat.png";
import "./card.css";

export const Card = ({ info }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [isMouseOff, setIsMouseOff] = useState(false);

  const mouseOutHandler = (e) => {
    if (+e.target.id !== info.id) return;
    if (isSelected && +e.target.id === info.id) {
      setIsMouseOff(true);
    }
  };

  const clickHandler = (e) => {
    e.preventDefault();
    if (!info.inStock) return;
    if (isSelected) {
      setIsSelected(false);
      setIsMouseOff(false);
    } else {
      setIsSelected(true);
      if (e.nativeEvent.pointerType === "touch") {
        setIsMouseOff(true);
      }
    }
  };

  return (
    <div
      className="card"
      id={String(info.id)}
      onMouseOut={(e) => mouseOutHandler(e)}
      onClick={(e) => clickHandler(e)}
    >
      <div
        className={
          info.inStock
            ? isSelected
              ? "card-border selected"
              : "card-border"
            : "card-border blocked"
        }
      >
        <div className="card-content">
          <div
            className={info.inStock ? "card-title" : "card-title text-blocked"}
          >
            {isMouseOff ? (
              <span className="card-title-active">Котэ не одобряет?</span>
            ) : (
              "Сказочное заморское яство"
            )}
          </div>
          <div
            className={
              info.inStock
                ? "card-product-name"
                : "card-product-name text-blocked"
            }
          >
            {info.productName}
          </div>
          <div
            className={
              info.inStock
                ? "card-composition"
                : "card-composition text-blocked"
            }
          >
            {info.composition}
          </div>
          <div
            className={
              info.inStock
                ? "card-portions portions"
                : "card-portions portions text-blocked"
            }
          >
            <span>{info.portions}</span> порций
          </div>
          <div
            className={
              info.inStock
                ? "card-portions mice"
                : "card-portions mice text-blocked"
            }
          >
            <span>{info.mice === 1 ? "" : info.mice}</span>
            {info.mice === 1 ? "мышь" : info.mice <= 4 ? " мыши" : " мышей"} в
            подарок
          </div>
          <div
            className={
              info.inStock
                ? "card-portions mice"
                : "card-portions mice text-blocked"
            }
          >
            {info.satisfied}
          </div>
          <img
            className={info.inStock ? "card-photo" : "card-photo photo-blocked"}
            src={Cat}
            alt="cat"
          />
          <div
            className={
              !info.inStock ? "card-weight weight-blocked" : isSelected ? "card-weight weight-selected" : "card-weight"
            }
          >
            <span className="weight-count">{info.weight}</span>
            <span className="weight">кг</span>
          </div>
        </div>
      </div>
      <div
        className={
          info.inStock ? "card-caption" : "card-caption caption-blocked"
        }
      >
        {!info.inStock
          ? `Печалька ${info.composition} закончился`
          : isSelected
          ? `${info.caption}`
          : <span>Чего сидишь? Порадуй котэ, <a href="#card">купи.</a></span>}
      </div>
    </div>
  );
};
