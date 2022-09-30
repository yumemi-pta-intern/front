import axios from "axios";
import { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Message } from "../type";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";

const TimelinePart: NextPage = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const like = async (id: string) => {
    await axios.post(`message/${id}/like`).then((res) => {});
  };

  const deleteLike = async (id: string) => {
    await axios.delete(`message/${id}/like`).then((res) => {});
  };

  useEffect(() => {
    axios.get("timeline", { withCredentials: true }).then((res) => {
      setMessages(res.data.data);
      console.log(res.data.data);
    });
  }, []);

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        borderLeft: "1px solid #ccc",
        borderRight: "1px solid #ccc",
      }}
    >
      {messages.map((message: Message) => (
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
          <Link href={`profile/${message.user_uuid}`}>
            <div style={{ padding: 10 }}>{message.name}</div>
          </Link>
          <div style={{ wordBreak: "break-all" }}>{message.message}</div>
          <div style={{ position: "absolute", bottom: 10, right: 20 }}>
            {message.like_status ? (
              <IconButton onClick={() => deleteLike(message.uuid!)}>
                <FavoriteIcon></FavoriteIcon>
              </IconButton>
            ) : (
              <IconButton onClick={() => like(message.uuid!)}>
                <FavoriteBorderIcon></FavoriteBorderIcon>
              </IconButton>
            )}
            {message.like_count}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimelinePart;
