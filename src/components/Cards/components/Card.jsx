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

function Card({ name, id, data }) {
  const [colors, setColors] = useState(defaultTheme.colors);

  return (
    <CardContainer className="card">
      <TitleContainer>
        <h2>{name}</h2>
        <small>#{id}</small>
      </TitleContainer>

      <ImgContainer className="ImgContainer">
        <img src={data.sprites[front_default]} alt="" />
      </ImgContainer>

      <TypeContainer>
        <p>Glass</p>
      </TypeContainer>

      <FavoriteButton>
        <div></div>
      </FavoriteButton>
    </CardContainer>
  );
}

export default Card;
