import React, { useState } from "react";
import { products } from "../data";
import { Card, Table, Col, Row, Button, Container } from "react-bootstrap";

function ProductList() {
  const [buy, setBuy] = useState([]);
  const handleBuy = (product) => {
    if (product.stock > 0) {
      setBuy([...buy, product]);
      alert(`Đã thêm ${product.name} vào giỏ hàng`);
    }
  };
  return (
    <Container>
      <col>
        <Row style={{ padding: "20px" }}>
          {products.map((p) => (
            <Card
              style={{
                width: "18rem",
                display: "inline-block",
                margin: "10px",
              }}
              key={p.id}>
              <Card.Img variant="top" src="/logo192.png" />
              <hr />
              <Card.Body>
                <Card.Title>
                  <h2>{p.name}</h2>
                </Card.Title>
                <Card.Text>
                  <b>Price:</b> {p.inputPrice} <br />
                  <b>Trạng thái:</b>{" "}
                  <span
                    style={{
                      color: p.stock > 0 ? "green" : "red",
                      fontWeight: "bold",
                    }}>
                    {p.stock > 0 ? "còn hàng" : "hết hàng"}
                  </span>
                </Card.Text>
                <Button
                  disabled={p.stock <= 0}
                  onClick={() => handleBuy(p)}
                  style={{
                    backgroundColor: p.stock > 0 ? "green" : "grey",
                    color: "white",
                    width: "100px",
                  }}>
                  {p.stock > 0 ? "buy" : "notBuy"}
                </Button>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </col>
    </Container>
  );
}
export default ProductList;
