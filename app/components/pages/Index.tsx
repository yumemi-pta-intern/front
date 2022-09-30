import { NextPage } from "next";
import Menu from "../Menu";
import TimelinePart from "../TimelinePart";

const Index: NextPage = () => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "15% 15% 1fr 30%" }}>
      <div></div>
      <Menu></Menu>
      <TimelinePart></TimelinePart>
      <div></div>
    </div>
  );
};

export default Index;
