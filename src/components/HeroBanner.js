import React from "react";
import { Carousel } from "react-bootstrap";

function HeroBanner() {
  return (
    <div className="mb-5">
      <Carousel fade interval={4000}>
        <Carousel.Item style={{ maxHeight: "450px" }}>
          <img
            className="d-block w-100 rounded"
            src="/Images/banner1.jpg"
            style={{ height: "450px", objectFit: "cover" }}
          />
          <Carousel.Caption className="bg-dark bg-opacity-50 p-3 rounded">
            <h1 className="fw-bold text-uppercase tracking-wider">
              SUMMER SALE UP TO 50%
            </h1>
            <p className="mb-0 fs-5">
              Khám phá bộ sưu tập mới nhất với ưu đãi đặc biệt!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ maxHeight: "450px" }}>
          <img
            className="d-block w-100 rounded"
            src="/Images/banner2.jpg"
            style={{ height: "450px", objectFit: "cover" }}
          />
          <Carousel.Caption className="bg-dark bg-opacity-50 p-3 rounded">
            <h1 className="fw-bold text-uppercase tracking-wider">
              SUMMER SALE UP TO 50%
            </h1>
            <p className="mb-0 fs-5">
              Khám phá bộ sưu tập mới nhất với ưu đãi đặc biệt!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ maxHeight: "450px" }}>
          <img
            className="d-block w-100 rounded"
            src="/Images/banner3.jpg"
            style={{ height: "450px", objectFit: "cover" }}
          />
          <Carousel.Caption className="bg-dark bg-opacity-50 p-3 rounded">
            <h1 className="fw-bold text-uppercase tracking-wider">
              SUMMER SALE UP TO 50%
            </h1>
            <p className="mb-0 fs-5">
              Khám phá bộ sưu tập mới nhất với ưu đãi đặc biệt!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default HeroBanner;
