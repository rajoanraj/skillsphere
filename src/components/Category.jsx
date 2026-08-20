"use client";

import { Button } from "@heroui/react";
import React, { useEffect, useState } from "react";

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const baseUrl =
          process.env.NODE_ENV === "development"
            ? ""
            : `https://${process.env.VERCEL_URL || "skillsphere-virid.vercel.app"}`;

        const res = await fetch(`${baseUrl}/category.json`);

        if (!res.ok) {
          throw new Error("Failed to fetch categories");
        }

        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="mb-5 space-x-2 flex overflow-x-auto scrollbar-hide">
      {categories.map((category) => (
        <Button variant="secondary" size="sm" key={category.id}>
          {category.title}
        </Button>
      ))}
    </div>
  );
};

export default Category;
