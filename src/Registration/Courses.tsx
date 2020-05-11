import React, { useState } from "react";
import "./Courses.css"
import Course from "./Course";

type course = {
  courseTitle: string,
  courseDescription: string
}
export default function Courses() {
  const [courses, setCourses] = useState<course[]>([
    {
      courseTitle: "CS 450",
      courseDescription: "Intro to computers"
    },
    {
      courseTitle: "SE 181",
      courseDescription: "Intro to software engineering"
    },
    {
      courseTitle: "MUSC 121",
      courseDescription: "The beatles"
    },
    {
      courseTitle: "HIST 382",
      courseDescription: "History through the ages"
    },
  ])

  function onDelete(i:number) {
    const newCourses = [...courses];
    newCourses.splice(i, 1);
    setCourses(newCourses);
  }

  return (
    <div className="courses">
      {courses.map((c, i) => (
        <Course key={c.courseTitle} courseTitle={c.courseTitle} courseDescription={c.courseDescription} onDelete={() => onDelete(i)} />
      ))}
    </div>
  )
}