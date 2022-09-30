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

type Props = {
  open: boolean;
  handleClose: () => void;
};

const Signup: NextPage<Props> = ({ open, handleClose }) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    await axios.post("signup", {
      name: nameRef.current?.value,
      password: passwordRef.current?.value,
    });
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>会員登録</DialogTitle>
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
          <Button onClick={handleClose}>キャンセル</Button>
          <Button onClick={handleSubmit} variant="contained">
            会員登録
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Signup;
