import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import { CardsContainer } from "./styles";

function Cards() {
  const [data, setData] = useState([]);

  async function fetchPokemon(number) {
    const url = `https://pokeapi.co/api/v2/pokemon/${number}`;
    const response = await fetch(url).then((response) => response.json());
    const dados = await setData(response);

    return dados;
  }
  console.log(data);
  useEffect(() => {
    fetchPokemon(5);
  }, []);

  return (
    <CardsContainer className="cards">
      <Card name={data.name} id={data.id} data={data} />
    </CardsContainer>
  );
}

export default Cards;
