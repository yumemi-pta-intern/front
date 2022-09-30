import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  TextField,
} from "@mui/material";
import { NextPage } from "next";
import AddIcon from "@mui/icons-material/Add";
import { useRef, useState } from "react";
import axios from "axios";

const MessageCreate: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const messageRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    await axios.post("message", {
      message: messageRef.current?.value,
    });
    handleClose();
  };

  return (
    <>
      <IconButton size="large" onClick={handleClick}>
        <AddIcon></AddIcon>
      </IconButton>
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle>新規投稿</DialogTitle>
        <DialogContent>
          <DialogContentText></DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="text"
            label="message"
            type="text"
            fullWidth
            variant="outlined"
            multiline
            rows={4}
            inputRef={messageRef}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit} variant="contained">
            投稿
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MessageCreate;
