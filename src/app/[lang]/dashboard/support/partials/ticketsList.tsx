"use client";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableFooter, TablePagination } from "@mui/material";
import getTickets from "@/src/lib/service/ticket/GetTickets";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function SupportPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [currentPage, setCurrentPage] = React.useState(
    Number(searchParams.get("page")) || 1
  );

  const { data } = useQuery({
    queryKey: ["ticketsList", currentPage],
    queryFn: () => getTickets({ page: currentPage }),
    placeholderData: keepPreviousData,
  });
  const totalPages = Math.ceil(
    data?.pagination.total_count / data?.pagination.item_per_page
  );
  function handleChange(e: any, value: number) {
    setCurrentPage(value);
    router.push(`?page=${value}`);
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">موضوع</TableCell>
              <TableCell align="right">وضعیت</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.data.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row" align="right">
                  <div className="leading-9">{row.subject}</div>
                  <div className="leading-8">{row.createdAt}</div>
                </TableCell>
                <TableCell align="right">{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[10]}
                count={totalPages}
                rowsPerPage={10}
                page={currentPage}
                slotProps={{
                  select: {
                    inputProps: {
                      "aria-label": "rows per page",
                    },
                    native: true,
                  },
                }}
                onPageChange={handleChange}
                // ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </>
  );
}
