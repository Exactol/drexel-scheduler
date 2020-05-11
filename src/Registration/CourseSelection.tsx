import React from "react";
import "./CourseSelection.css"
import Courses from "./Courses";
import Input from "../Common/Input";
import Button from "../Common/Button";
import Select from "../Common/Select";
export default function CourseSelection() {
  return (
    <div className="course-selection">
      <Select className="course-select" />
      <Courses />
      <Button className="course-submit">
        Create
      </Button>
    </div>
  )
}