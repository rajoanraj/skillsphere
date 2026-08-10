import React from "react";

const CoursesDetailsPage = async ({ params }) => {
  const { id } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const res = await fetch(`${baseUrl}/data.json`, { cache: 'no-store' });
  const course = await res.json();
  const courseDetails = course.find((course) => course.id === parseInt(id));

  return (
    <div>
      <div>Course Details</div>
      <div>
        <h1>{courseDetails.title}</h1>
        <p>{courseDetails.description}</p>
        <p>Instructor: {courseDetails.instructor}</p>
        <p>Duration: {courseDetails.duration}</p>
        <p>Rating: {courseDetails.rating}</p>
      </div>
    </div>
  );
};

export default CoursesDetailsPage;
    