"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { TextField, Button } from "@mui/material";
import type { CreateTicket } from "@/src/lib/service/ticket/type/CreateTicket";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import createTicket from "@/src/lib/service/ticket/CreateTicket";
import { useMutation } from "@tanstack/react-query";
import QueryClientProviderWrapper from "@/src/components/QueryClientProviderWrapper";
import { useRouter } from "next/navigation";

export default function CreateTicketForm() {
  return (
    <>
      <QueryClientProviderWrapper>
        <h1>ایجاد تیکت جدید</h1>

        <CreateTicketFormInner />
      </QueryClientProviderWrapper>
    </>
  );
}

function CreateTicketFormInner() {
  const router=useRouter()
  const { mutateAsync: doCreateTicket,isPending } = useMutation({
    mutationFn: createTicket,
  });
  const schema = z.object({
    subject: z.string().min(2),
    content: z.string().min(5),
    images: z.array(z.string()).optional(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateTicket>({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<CreateTicket> =async (data) => {
    await doCreateTicket(data);
    router.push('/dashboard/support')
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        
      >
        <fieldset disabled={isPending} className="flex flex-col gap-2 max-w-[20rem]">
        <TextField 
          {...register("subject")}
          label="عنوان"
          margin="normal"
          error={!!errors.subject}
          helperText={errors.subject?.message}
        />

        <TextField
          {...register("content")}
          label="توضیح"
          margin="normal"
          error={!!errors.content}
          helperText={errors.content?.message}
        />
        <Button disabled={isPending} type="submit" variant="contained">
          ایجاد
        </Button>
        </fieldset>
        {/* <input type="submit" value="ارسال" /> */}
      </form>
    </>
  );
}
