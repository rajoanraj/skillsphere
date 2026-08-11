"use client";
import { UpdateInformationModal } from "@/components/UpdateInformationModal";
import { authClient } from "@/lib/authClient";
import { Card } from "@heroui/react";
import { Avatar } from "@heroui/react";

const ProfilePage = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;
  console.log(user);
  return (
    <div>
      <Card className="max-w-96 mx-auto flex flex-col items-center border mt-5">
        <Avatar className="h-20 w-20">
          <Avatar.Image
            src={user?.avatar_url || "https://via.placeholder.com/150"}
            alt="User Avatar"
          />
          <Avatar.Fallback>
            {user?.email?.charAt(0).toUpperCase()}
          </Avatar.Fallback>
        </Avatar>
        <h2 className="text-lg font-semibold">{user?.name || user?.email}</h2>
        <p className="text-gray-500">{user?.email}</p>
       <UpdateInformationModal />
      </Card>
    </div>
  );
};

export default ProfilePage;
