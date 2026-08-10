import CoursesCard from "./CoursesCard";

const TopCourses = async () => {
    const res = await fetch(
      "https://skillsphere-virid.vercel.app/data.json",
      { cache: "no-store" },
    );
    const data = await res.json();
   const topCourses = data.slice(0, 6);
    return (
        <div>
            <div className="text-2xl font-bold my-5">Top Courses</div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {topCourses.map((course) => (
                    <CoursesCard key={course.id} course={course} />
                ))}
            </div>
        </div>



    );
};

export default TopCourses;