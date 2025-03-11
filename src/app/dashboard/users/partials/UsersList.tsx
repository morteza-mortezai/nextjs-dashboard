"use client";
import getUsers from "@/src/lib/service/user/GetUsers";
import { Avatar, Pagination } from "@mui/material";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { useState } from "react";

const queryClient = new QueryClient();

function UsersListInner() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState<number>(
    Number(searchParams.get("page") || 1)
  );

  const { data } = useQuery({
    queryKey: ["userList", currentPage],
    queryFn: () => getUsers({ page: currentPage }),
    staleTime: 0,
  });

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    router.push(`?page=${value}`);
    setCurrentPage(value);
  };
  const totalPage = Math.ceil(
    (data?.pagination.total_count || 1) / (data?.pagination.item_per_page || 1)
  );

  return (
    <div>
      {data?.data.map((u) => (
        <div className="border-b p-4 flex gap-2 items-center" key={u.id}>
          <Avatar src="/images/person.svg" />
          <div>{u.fullName}</div>
          <div dir="ltr">{u.phone}</div>
        </div>
      ))}
      <div className="mt-3 flex justify-center">
        {data && (
          <Pagination
            page={currentPage}
            count={totalPage}
            onChange={handleChange}
          />
        )}
      </div>
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
