import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesApp from "../routes";
import { GlobalStyles } from "./styles/default/global";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <RoutesApp />
    </BrowserRouter>
  );
}

export default App;
