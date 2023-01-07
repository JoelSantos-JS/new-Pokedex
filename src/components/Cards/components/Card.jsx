import React from "react";
import { useState } from "react";
import { defaultTheme } from "../../../styles/themes/default";
import {
  FavoriteButton,
  ImgContainer,
  TitleContainer,
  CardContainer,
  TypeContainer,
} from "./style";

function Card({ data, loading }) {
  return (
    <>
      {loading ? (
        <h1>Carregando </h1>
      ) : (
        data.map((item) => {
          console.log(item);
          return (
            <CardContainer className="card" key={item.id}>
              <TitleContainer>
                <h2>{item.name}</h2>
                <small>{item.id}</small>
              </TitleContainer>

              <ImgContainer className="ImgContainer">
                <img
                  src={item.sprites.other.home.front_shiny}
                  alt={item.name}
                />
              </ImgContainer>

              <TypeContainer>
                {item.types.map((type) => {
                  return <p> {type.type.name}</p>;
                })}
              </TypeContainer>

              <FavoriteButton>
                <div></div>
              </FavoriteButton>
            </CardContainer>
          );
        })
      )}
    </>
  );
}

export default Card;
