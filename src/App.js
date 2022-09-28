import React from "react";
import Header from "./componentes/Header/index.js";
import ProductosLista from "./componentes/productos/index.js";
import 'boxicons';

function App() {
  return (
    <div className="App">
      <Header />
      <ProductosLista />
    </div>
  );
}

export default App;
