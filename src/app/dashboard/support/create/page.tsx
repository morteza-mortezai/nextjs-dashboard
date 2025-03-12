'use client'
import { useForm } from "react-hook-form";
import { TextField, Button } from "@mui/material";
import type { CreateTicket } from "@/src/lib/service/ticket/type/CreateTicket";

export default function CreateTicket() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CreateTicket>();
  return (
    <>
      <h1>ایجاد تیکت جدید</h1>
      <form
        onSubmit={handleSubmit((data) => {
          console.log("dd", data);
        })}
        className="flex flex-col gap-2"
      >
        <TextField
          {...register("subject")}
          label="Outlined"
          variant="outlined"
        />
        <TextField
          {...register("content")}
          label="Outlined"
          variant="outlined"
        />
        <Button>ایجاد</Button>
      </form>
    </>
  );
}
