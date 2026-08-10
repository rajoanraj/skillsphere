import CoursesCard from "@/components/CoursesCard";
const AllCourses = async () => {
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const res = await fetch(`${baseUrl}/data.json`,{ cache: 'no-store' });
  const courses = await res.json();
    return (
        <div>
            <div className="text-2xl font-bold my-5">All Courses</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {courses.map((course) => (
                    <CoursesCard key={course.id} course={course} />
                ))}
            </div>
        </div>
    );
};

export default AllCourses;