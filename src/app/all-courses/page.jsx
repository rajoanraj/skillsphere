"use client";

import { useEffect, useState } from "react";
import Category from "@/components/Category";
import CoursesCard from "@/components/CoursesCard";

const AllCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch("/data.json");

      const data = await res.json();

      setCourses(data);
    };

    fetchCourses();
  }, []);

  return (
    <div>
      <div className="text-2xl font-bold my-5">All Courses</div>

      <Category />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {courses.map((course) => (
          <CoursesCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default AllCourses;
