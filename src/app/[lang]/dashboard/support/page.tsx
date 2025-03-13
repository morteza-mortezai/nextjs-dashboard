"use client";
import * as React from "react";
import QueryClienProviderWrapper from "@/src/components/QueryClientProviderWrapper";
import TicketsList from "./partials/ticketsList";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";
export default function SupportPage() {
  return (
    <>
      <QueryClienProviderWrapper>
        <div className="flex justify-between">
          <h1>لیست تیکت ها</h1>
          <Button>
            <Link href="support/create">ایجاد تیکت</Link>
          </Button>
        </div>
        <TicketsList />
      </QueryClienProviderWrapper>
    </>
  );
}
