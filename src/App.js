import React from "react";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import { Row, Col, Container } from "react-bootstrap";
import ProductList from "./components/ProductList";
function App() {
  return (
    <Container>
      <Col>
        <Row>
          <Header />
        </Row>
        <Row>
          <HeroBanner />
        </Row>
        <Row>
          <ProductList />
        </Row>
      </Col>
    </Container>
  );
}

export default App;
