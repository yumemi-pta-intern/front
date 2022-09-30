import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Profile from "../../components/pages/Profile";

const ProfilePage: NextPage = () => {
  const router = useRouter();
  const [id, setId] = useState("");

  useEffect(() => {
    const id =
      typeof router.query.user_uuid === "string"
        ? router.query.user_uuid
        : "01838c32-6341-708f-9fe0-edf76eb55236";
    console.log(id);
    setId(id);
  }, [router]);

  return <Profile id={id}></Profile>;
};

export default ProfilePage;
