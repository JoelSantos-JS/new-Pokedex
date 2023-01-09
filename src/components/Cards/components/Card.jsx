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
  const [colors, setColors] = useState(defaultTheme);

  return (
    <>
      {loading ? (
        <h1>Carregando </h1>
      ) : (
        data.map((item, index) => {
          return (
            <CardContainer className="card" key={item.id}>
              <TitleContainer key={index}>
                <h2>{name}</h2>
                <small>{item.id}</small>
              </TitleContainer>

              <ImgContainer className="ImgContainer" key={item.id}>
                <img
                  src={item.sprites.other.home.front_shiny}
                  alt={item.name}
                />
              </ImgContainer>

              {item.types.map((type, index) => {
                return (
                  <TypeContainer key={index}>
                    <p> {type.type.name}</p>
                  </TypeContainer>
                );
              })}

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
