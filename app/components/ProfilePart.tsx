import { IconButton } from "@mui/material";
import axios from "axios";
import { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Message, Profile } from "../type";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

type Props = {
  id: string;
};

const ProfilePart: NextPage<Props> = ({ id }) => {
  const [profile, setProfile] = useState<Profile>();
  const [messages, setMessages] = useState<Message[]>([]);

  const getProfile = async () => {
    await axios.get(`user/${id}`).then((res) => {
      setProfile(res.data.data);
      // if (res.data.data?.messages != undefined)
      // setMessages(res.data.data);
      console.log(res.data.data);
    });
  };

  const like = async (id: string) => {
    await axios.post(`message/${id}/like`).then((res) => {
      setMessages((prev) => {
        return prev?.map((el) =>
          el.uuid == id
            ? Object.assign(el, {
                like_conunt: el.like_count++,
                like_status: true,
              })
            : el
        );
      });
    });
  };

  const deleteLike = async (id: string) => {
    await axios.delete(`message/${id}/like`).then((res) => {
      setMessages((prev) => {
        return prev.map((el) =>
          el.uuid == id
            ? Object.assign(el, {
                like_conunt: el.like_count--,
                like_status: false,
              })
            : el
        );
      });
    });
  };

  useEffect(() => {
    if (id != null && profile == null) {
      getProfile();
    }
  }, [getProfile, id, profile]);

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        borderLeft: "1px solid #ccc",
        borderRight: "1px solid #ccc",
      }}
    >
      <div
        style={{ margin: 20, borderBottom: "1px solid #ccc", minHeight: "25%" }}
      >
        <div>{profile?.name}</div>
        <div>{profile?.prifile_message}</div>
      </div>
      <div>
        {profile?.messages.map((message) => (
          <div
            key={message.uuid}
            style={{
              margin: 20,
              padding: "0 0 60px 0",
              minHeight: "10%",
              borderBottom: "1px #ccc solid",
              position: "relative",
            }}
          >
            <Link href={`/profile/${message.user_uuid}`}>
              <div style={{ padding: 10 }}>{profile.name}</div>
            </Link>
            <div style={{ wordBreak: "break-all" }}>{message.message}</div>
            <div style={{ position: "absolute", bottom: 10, right: 20 }}>
              {message.like_status ? (
                <IconButton onClick={() => deleteLike(message.uuid)}>
                  <FavoriteIcon></FavoriteIcon>
                </IconButton>
              ) : (
                <IconButton onClick={() => like(message.uuid)}>
                  <FavoriteBorderIcon></FavoriteBorderIcon>
                </IconButton>
              )}
              {message.like_count}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfilePart;
