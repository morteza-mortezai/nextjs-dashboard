"use client";
import React, { createContext } from "react";
import { useContext } from "react";

export const SessionContext = createContext<string | null | undefined>(
  undefined
);

export function useSession() {
  return useContext(SessionContext);
}

export default function sessionProvider({
  children,
  session,
}: {
  children: React.ReactNode;
  session: string | undefined;
}) {
  return <SessionContext value={session}>{children}</SessionContext>;
}
