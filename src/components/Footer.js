import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-dark text-light mt-5 py-4">
      <Container>
        <Row className="gy-3">
          <Col md={4}>
            <h5>FASHION SHOP</h5>
            <p className="small text-muted mb-0">
              Chuyên cung cấp các mặt hàng thời trang nam, nữ chất lượng cao, kiểu dáng hiện đại.
            </p>
          </Col>
          <Col md={4}>
            <h5>Liên hệ</h5>
            <p className="small text-muted mb-1">Email: contact@fashionshop.com</p>
            <p className="small text-muted mb-1">Hotline: 0123 456 789</p>
            <p className="small text-muted mb-0">Địa chỉ: Hà Nội, Việt Nam</p>
          </Col>
          <Col md={4}>
            <h5>Chính sách</h5>
            <p className="small text-muted mb-1">Bảo hành 1 đổi 1 trong 30 ngày</p>
            <p className="small text-muted mb-0">Giao hàng miễn phí toàn quốc</p>
          </Col>
        </Row>
        <hr className="my-3 border-secondary" />
        <Row>
          <Col className="text-center small text-muted">
            &copy; {new Date().getFullYear()} Fashion Shop. All Rights Reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
