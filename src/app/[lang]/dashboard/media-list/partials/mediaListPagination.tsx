"use client";
import Pagination from "@mui/material/Pagination";
import { useRouter, useSearchParams } from "next/navigation";

export default function mediaListPagination({
  page,
  totalPages,
}: {
  page: number;
  totalPages: number;
}) {
  const router = useRouter();
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    router.push(`?page=${value}`, { scroll: false });
  };

  return <Pagination page={page} count={totalPages} onChange={handleChange} />;
}
