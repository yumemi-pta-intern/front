import { NextPage } from "next";
import MenuList from "@mui/material/MenuList";
import { ListItemIcon, ListItemText, MenuItem } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import Link from "next/link";
import { useCallback, useEffect } from "react";
import axios from "axios";
import MessageCreate from "./MessageCreate";

const Menu: NextPage = () => {
  let userId = "";

  const getUserId = useCallback(async () => {
    await axios.get("/user/me").then((res) => {
      userId = res.data.data.uuid;
    });
  }, [userId]);

  useEffect(() => {
    getUserId();
  }, [getUserId]);

  return (
    <div style={{ position: "relative", marginTop: 50 }}>
      <MenuList sx={{ fontSize: "2rem" }}>
        <Link href={"/"}>
          <MenuItem>
            <ListItemIcon>
              <HomeIcon></HomeIcon>
            </ListItemIcon>
            <ListItemText>ホーム</ListItemText>
          </MenuItem>
        </Link>
        <Link href={`${userId != "" ? "/profile/" + userId : "/"}`}>
          <MenuItem>
            <ListItemIcon>
              <PersonIcon></PersonIcon>
            </ListItemIcon>
            <ListItemText>プロフィール</ListItemText>
          </MenuItem>
        </Link>
      </MenuList>
      <div
        style={{
          position: "absolute",
          bottom: 50,
          width: "100%",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <MessageCreate></MessageCreate>
      </div>
    </div>
  );
};

export default Menu;
