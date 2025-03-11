"use client";
import * as React from "react";
import QueryClienProviderWrapper from "@/src/components/QueryClientProviderWrapper";
import TicketsList from "./partials/ticketsList";

export default function SupportPage() {
  return (
    <>
      <QueryClienProviderWrapper>
        <h1>لیست تیکت ها</h1>
        <TicketsList />
      </QueryClienProviderWrapper>
    </>
  );
}
