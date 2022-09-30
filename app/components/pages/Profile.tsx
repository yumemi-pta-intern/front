import { NextPage } from "next";
import Menu from "../Menu";
import ProfilePart from "../ProfilePart";

const Profile: NextPage = () => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "15% 15% 1fr 30%" }}>
      <div></div>
      <Menu></Menu>
      <ProfilePart></ProfilePart>
      <div></div>
    </div>
  );
};

export default Profile;
