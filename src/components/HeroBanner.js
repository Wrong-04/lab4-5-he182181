import React from "react";
import { Carousel } from "react-bootstrap";

function HeroBanner() {
  const banners = [
    { id: 1, src: "/Images/banner1.jpg", alt: "Banner 1", title: "SUMMER SALE UP TO 50%" },
    { id: 2, src: "/Images/banner2.jpg", alt: "Banner 2", title: "NEW ARRIVALS 2026" },
    { id: 3, src: "/Images/banner3.jpg", alt: "Banner 3", title: "EXCLUSIVE COLLECTION" },
  ];

  return (
    <div className="mb-5">
      <Carousel fade interval={4000}>
        {banners.map((b) => (
          <Carousel.Item key={b.id} style={{ maxHeight: "450px" }}>
            <img
              className="d-block w-100 rounded"
              src={b.src}
              alt={b.alt}
              style={{ height: "450px", objectFit: "cover" }}
            />
            <Carousel.Caption className="bg-dark bg-opacity-50 p-3 rounded">
              <h1 className="fw-bold text-uppercase tracking-wider">{b.title}</h1>
              <p className="mb-0 fs-5">Khám phá bộ sưu tập mới nhất với ưu đãi đặc biệt!</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default HeroBanner;
