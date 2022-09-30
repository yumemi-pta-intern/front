import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import Login from "../components/dialogs/Login";

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  axios.defaults.withCredentials = true;
  axios.defaults.baseURL = "http://localhost:80/api/";

  const handleClose = () => {
    setIsLoginOpen(false);
  };

  const cookieCheck = async () => {
    await axios.get("user/me").then((res) => {
      if (res.data.data.uuid != null) setIsLoginOpen(false);
      else setIsLoginOpen(true);
    });
  };

  useEffect(() => {
    cookieCheck();
  }, []);

  return (
    <>
      <Component {...pageProps} />
      <Login
        open={isLoginOpen}
        handleClose={handleClose}
        cookieCheck={cookieCheck}
      ></Login>
    </>
  );
}

export default MyApp;
