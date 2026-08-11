"use client";
import { authClient } from "@/lib/authClient";
import { Avatar, Button } from "@heroui/react";
import Link from "next/link";

const Navbar = () => {
const userData = authClient.useSession()
const user = userData.data?.user

const handleLogout = async () => {
  await authClient.signOut();
};

return (
  <div className="border-b px-2">
    <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
      <div className="flex gap-2 items-center">
        <h3 className="font-black text-lg">SkillSphere.</h3>
      </div>

        <ul className="flex items-center gap-5 text-sm">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/all-courses"}>All Courses</Link>
          </li>
          <li>
            <Link href={"/profile"}>Profile</Link>
          </li>
        </ul>

        <div className="flex gap-4">
          {!user ? 
           (
            <ul className="flex items-center text-sm gap-5">
              <li>
                <Link href={"/signup"}>SignUp</Link>
              </li>
              <li>
                <Link href={"/signin"}>SignIn</Link>
              </li>
            </ul>
           ) : (
            <div className="flex items-center gap-2">
              <Avatar size="sm">
                <Avatar.Image
                  src={user?.avatar_url || "https://via.placeholder.com/150"}
                  alt="User Avatar"
                /> 
                <Avatar.Fallback>{user?.email?.charAt(0).toUpperCase()}</Avatar.Fallback>
              </Avatar>
             <Button onClick={handleLogout} size='sm' variant='danger'>Logout</Button>
            
            </div>)}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;