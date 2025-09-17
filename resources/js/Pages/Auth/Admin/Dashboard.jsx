import { Head } from "@inertiajs/react";
import AuthLayout from "@/Layouts/AuthLayout";
import UserListing from "@/Components/UserListing";

export default function Dashboard({ users }) {
  return <>
    <Head title="Admin Dashboard" />
    <UserListing users={users} />
    </>
}

Dashboard.layout = (page) => <AuthLayout>{page}</AuthLayout>;
