import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import axios from "axios";
import { NextPage } from "next";
import { useRef, useState } from "react";
import Signup from "./Signup";

type Props = {
  open: boolean;
  handleClose: () => void;
  cookieCheck: () => void;
};

const Login: NextPage<Props> = ({ open, handleClose, cookieCheck }) => {
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSignupOpen = () => {
    setIsSignupOpen(true);
  };

  const handleCloseIsSignupOpen = () => {
    setIsSignupOpen(false);
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(nameRef.current?.value);
    await axios
      .post(
        "login",
        {
          name: nameRef.current?.value,
          password: passwordRef.current?.value,
        },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.data.status == "OK") {
          cookieCheck();
        }
      });
  };

  return (
    <>
      <Dialog open={open}>
        <DialogTitle>ログイン</DialogTitle>
        <DialogContent>
          <DialogContentText></DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="email"
            fullWidth
            variant="standard"
            inputRef={nameRef}
          />
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
            inputRef={passwordRef}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSignupOpen}>会員登録</Button>
          <Button onClick={handleSubmit} variant="contained">
            ログイン
          </Button>
        </DialogActions>
      </Dialog>
      <Signup
        open={isSignupOpen}
        handleClose={handleCloseIsSignupOpen}
      ></Signup>
    </>
  );
};

export default Login;
