"use client";

import { UpdateInformationModal } from "@/components/UpdateInformationModal";
import { authClient } from "@/lib/authClient";
import { Card, Avatar } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ProfilePage = () => {
  const router = useRouter();

  const { data: session, isPending } = authClient.useSession();

  useEffect(() => {
    if (!isPending && !session?.user) {
      router.push("/signin");
    }
  }, [session, isPending, router]);

  if (isPending) {
    return <p>Loading...</p>;
  }

  const user = session?.user;
  console.log("User data:", user);

  if (!user) {
    return null;
  }

  return (
    <div>
      <Card className="max-w-96 mx-auto flex flex-col items-center border mt-5">
        <Avatar>
          <Avatar.Image
            alt="John Doe"
            src={user?.image}
            referrerPolicy="no-referrer"
          />
          <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
        </Avatar>

        <h2 className="text-lg font-semibold">{user.name || user.email}</h2>

        <p className="text-gray-500">{user.email}</p>

        <UpdateInformationModal />
      </Card>
    </div>
  );
};

export default ProfilePage;
