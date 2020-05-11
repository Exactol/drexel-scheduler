import React from "react";
import "./Course.css"
import Card from "../Common/Card";
import Button from "../Common/Button";

type ClassProps = {
  courseTitle: string,
  courseDescription: string,
  onDelete: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void),
}
export default function Course({courseTitle, courseDescription, onDelete}: ClassProps) {
  return (
    <Card>
      <div className="course">
        <div className="course-details">
          <div className="course-title">
            {courseTitle}
          </div>
          {courseDescription}
        </div>
        <button className="course-x" onClick={onDelete}>X</button>
      </div>
    </Card>
  )
}