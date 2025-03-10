"use client";
import { useState } from "react";
import { UserMedia } from "@/src/lib/service/media/type/UserMedia";
import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { deleteUserMediaAction } from "./medialist.action";

export default function MediaActions({ media }: { media: UserMedia }) {
  const [open, setOpen] = useState(false);
  const deleteActionWithId = deleteUserMediaAction.bind(null, media.id);
  return (
    <>
      <Button onClick={() => setOpen(true)}>حذف</Button>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          حذف
        </DialogTitle>
        <DialogContent>
          <DialogContentText>آیابرای حذف مطمءنید ؟</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => setOpen(true)}>
            خیر
          </Button>
          <form action={deleteActionWithId}>
            <Button type="submit" onClick={() => setOpen(true)}>بله</Button>
          </form>
        </DialogActions>
      </Dialog>
    </>
  );
}
