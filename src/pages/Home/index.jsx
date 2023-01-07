import React from "react";
import Cards from "../../components/Cards";
import Header from "../../components/Header";
import { HomeContainer } from "./styles";

function HomePage() {
  return (
    <HomeContainer className="container">
      <Header />
      <Cards />
    </HomeContainer>
  );
}

export default HomePage;
