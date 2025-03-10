import UsersList from "./partials/UsersList";
import { Suspense } from "react";

export default function UsersPage(){
    return <>
    <h1>کاربران سایت</h1>
    <Suspense>
    <UsersList />
    </Suspense>
    </>
}