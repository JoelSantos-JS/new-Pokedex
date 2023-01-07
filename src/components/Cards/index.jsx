import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import { CardsContainer } from "./styles";

function Cards() {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [loading, setLoading] = useState(true);
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();

  async function fetchPokemon() {
    setLoading(true);
    const res = await axios.get(url);

    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    getPokemon(res.data.results);
    setLoading(false);
  }

  const getPokemon = async (res) => {
    res.map(async (item) => {
      const result = await axios.get(item.url);
      setData((state) => {
        state = [...state, result.data];
        state.sort((a, b) => (a.id > b.id ? 1 : -1));

        return state;
      });
    });
  };

  useEffect(() => {
    fetchPokemon();
  }, [url]);

  return (
    <CardsContainer className="cards">
      <Card data={data} loading={loading} />
    </CardsContainer>
  );
}

export default Cards;
