import React from "react";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import { Container } from "react-bootstrap";
import ProductList from "./components/ProductList";
function App() {
  return (
    <Container>
      <Header />
      <HeroBanner />
      <ProductList />
    </Container>
  );
}

export default App;
