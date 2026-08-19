import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Container,
  Card,
  Form,
  Button,
  Row,
  Col,
  Nav,
  Navbar,
} from "react-bootstrap";

const BASE_URL = "http://localhost:9999";

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedSemester, setSelectedSemester] = useState("");

  const fetchCourses = () => {
    axios
      .get(`${BASE_URL}/courses`)
      .then((res) => setCourses(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const semesters = useMemo(() => {
    return [...new Set(courses.map((cls) => cls.semester).filter(Boolean))];
  }, [courses]);

  const filteredCourses = useMemo(() => {
    return courses.filter((s) => {
      const q = search.trim().toLowerCase();
      const matchesSearch =
        !q ||
        (s.code && s.code.toLowerCase().includes(q)) ||
        (s.nameEn && s.nameEn.toLowerCase().includes(q)) ||
        (s.nameVi && s.nameVi.toLowerCase().includes(q)) ||
        (s.category && s.category.toLowerCase().includes(q)) ||
        (s.badge && s.badge.toLowerCase().includes(q)) ||
        (s.classes &&
          s.classes.some(
            (cls) =>
              (cls.name && cls.name.toLowerCase().includes(q)) ||
              (cls.classId && cls.classId.toLowerCase().includes(q))
          ));

      const matchesSemester =
        !selectedSemester || s.semester === selectedSemester;

      return matchesSearch && matchesSemester;
    });
  }, [courses, search, selectedSemester]);

  const handleRefresh = () => {
    setSearch("");
    setSelectedSemester("");
    fetchCourses();
  };

  return (
    <Container>
      <Row>
        <Navbar
          expand="lg"
          className="mb-4 d-flex justify-content-between px-3">
          <Nav>
            <Nav.Link href="#home">
              <b>Courses</b>
            </Nav.Link>
            <Nav.Link href="#home">Projects</Nav.Link>
            <Nav.Link href="#home">Review</Nav.Link>
            <Nav.Link href="#home"> Title Confirmation</Nav.Link>
            <Nav.Link href="#home">Reference</Nav.Link>
          </Nav>
        </Navbar>
      </Row>
      <Row>
        <Col md={9}>
          <p>Welcome back lecturer</p>
          <h3>My Courses</h3>
          <Form.Control
            className="w-50"
            type="text"
            placeholder="Tìm kiếm theo class name hoặc Lecturer..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Col>
        <Col md={2}>
          <p>September</p>
          <Form.Select
            value={selectedSemester}
            onChange={(e) => setSelectedSemester(e.target.value)}>
            <option value="">All</option>
            {semesters.map((subject, index) => (
              <option key={index} value={subject}>
                {subject}
              </option>
            ))}
          </Form.Select>
        </Col>
        <Col md={1}>
          <Button style={{ marginTop: "40px" }} onClick={handleRefresh}>
            {" "}
            Refresh
          </Button>
        </Col>
      </Row>
      <Row>
        <p className="mt-2 text-end">
          <b>{filteredCourses.length}</b> Courses
        </p>
        {filteredCourses.map((s, index) => (
          <Card
            key={s.id || index}
            style={{ width: "18rem", display: "inline-block", margin: "10px" }}>
            <Card.Body>
              <Card.Text>
                <b>{s.badge || s.Badge}</b> <i className="text-end">{s.category}</i> <br />
                <i>{s.code}</i> <br />
                <b>{s.nameEn}</b>
                <br />
                <i>{s.nameVi}</i>
              </Card.Text>
              <hr />
              <Button
                as={Link}
                to={`/detail/${s.id}`}
                variant="none"
                className="btn-sm px-2 me-2 ">
                Get started
              </Button>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
  );
};
export default CourseList;

