import React from 'react';
import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import { FcRating } from "react-icons/fc";

const CoursesCard = ({ course }) => {
    return (
      <Card className="border rounded-xl shadow-md">
        <div className="relative w-full aspect-square">
          <Image
            src={course.image}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt={course.title}
            className="object-cover"
          />
          <Chip className="absolute top-2 right-2" color="primary">
            {course.level}
          </Chip>
        </div>
        <div>
          <h3 className="text-xl font-bold">{course.title}</h3>
          <p className="text-gray-600">{course.description}</p>
          <h1 className="text-lg font-semibold">Instructor: {course.instructor}</h1>
        </div>
          <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600">Duration: {course.duration}</p>
        </div>
        <div className="flex items-center gap-2 ">
          <FcRating />
          <p className="text-gray-600">{course.rating}</p>
        </div>
        </div>
        <Button variant="outline" className="w-full">
          View Details
        </Button>
      </Card>
    );
};

export default CoursesCard;