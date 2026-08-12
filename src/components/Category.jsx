import { Button } from "@heroui/react";
import React from "react";

const Category = async () => {
const baseUrl = process.env.NODE_ENV === "development" ? "http://localhost:3000" : `https://${process.env.VERCEL_URL || "skillsphere-virid.vercel.app"}`;
  const res = await fetch(`${baseUrl}/category.json`, { cache: "no-store" }
  );
  const categories = await res.json();
  console.log(categories);
  return (
   <div className="mb-5 space-x-3">
    {categories.map((category) => <Button size="sm" key={category.id}>{category.name}</Button>)}
  </div>
 );
};

export default Category;
