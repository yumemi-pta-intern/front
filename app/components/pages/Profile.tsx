import { NextPage } from "next";
import { useEffect } from "react";
import Menu from "../Menu";
import ProfilePart from "../ProfilePart";

type Props = {
  id: string;
};

const Profile: NextPage<Props> = ({ id }) => {
  useEffect(() => {
    console.log(id);
  }, []);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "15% 15% 1fr 30%" }}>
      <div></div>
      <Menu></Menu>
      <ProfilePart id={id}></ProfilePart>
      <div></div>
    </div>
  );
};

export default Profile;
