import { Outlet } from "umi";
import Head from "@/components/Head";
import Footer from "@/components/Footer";

export default function Layout() {
  return (
    <div>
      <Head />
      <Outlet />
      <Footer />
    </div>
  );
}
