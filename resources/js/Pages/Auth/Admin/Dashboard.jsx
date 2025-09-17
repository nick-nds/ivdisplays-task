import AuthLayout from "@/Layouts/AuthLayout";

export default function Dashboard() {
  return "Admin Dashboard";
}

Dashboard.layout = (page) => <AuthLayout>{page}</AuthLayout>;
