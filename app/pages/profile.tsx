import axios from "axios";
import { NextPage } from "next";
import Router from "next/router";
import { useEffect } from "react";

const ProfileRedirect: NextPage = () => {
  const redirect = async () => {
    await axios.get("user/me").then((res) => {
      Router.push(`/profile/${res.data.data.uuid}`);
    });
  };

  useEffect(() => {
    redirect();
  }, []);

  return <div></div>;
};

export default ProfileRedirect;
