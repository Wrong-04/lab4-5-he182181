import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Container,
  Button,
  Row,
} from "react-bootstrap";

const BASE_URL = "http://localhost:9999";

const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/courses/${id}`)
      .then((res) => setCourse(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  const currentClass =
    course?.classes?.find((c) => c.status === "active") || course?.classes?.[0];

  return (
    <Container>
      <Row className="mt-5">
        <p> My courses - {course?.nameEn || "courses Name"}</p>
        <h2>
          {course
            ? `${course.nameEn}_${course.nameVi}`
            : "Web Development Project_Dự án Phát triển web"}
        </h2>
        <p>
          <b>{course?.code || "Course code"}</b>- {currentClass?.name || "current class"}
        </p>
      </Row>
      <Button
        variant="secondary"
        className="mb-4 me-2"
        style={{ backgroundColor: "#4b5563", border: "none" }}
        onClick={() => navigate("/courses")}>
        Back
      </Button>
      <Button
        variant="secondary"
        className="mb-4"
        style={{ backgroundColor: "#4b5563", border: "none" }}
        onClick={() => navigate("/courses")}>
        Delete question
      </Button>
    </Container>
  );
};

export default CourseDetail;


