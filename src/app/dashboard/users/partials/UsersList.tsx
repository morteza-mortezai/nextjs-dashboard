"use client";
import getUsers from "@/src/lib/service/user/GetUsers";
import { Avatar } from "@mui/material";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

function UsersListInner() {
  // Queries
  const { isPending, error, data } = useQuery({
    queryKey: ["userList"],
    queryFn: () => getUsers({}),
  });

  return (
    <div>
      {data?.data.map((u) => (
        <div className="border-b p-4 flex gap-2 items-center" key={u.id}>
          <Avatar src="/images/person.svg" />
          <div>{u.fullName}</div>
          <div dir="ltr">{u.phone}</div>
        </div>
      ))}
    </div>
  );
}

export default function UsersList() {
  return (
    <QueryClientProvider client={queryClient}>
      <UsersListInner />
    </QueryClientProvider>
  );
}
