import AuthLayout from "@/Layouts/AuthLayout";

export default function Dashboard() {
  return "User Dashboard";
}

Dashboard.layout = (page) => <AuthLayout>{page}</AuthLayout>;
