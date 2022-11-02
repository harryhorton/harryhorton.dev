import Navbar from "./navbar";
import Footer from "./footer";
import { ReactNode } from "react";

export default function Layout({ children }: { children?: ReactNode }) {
  return (
    <div className="bg-gray-100 h-screen text-gray-900 overflow-auto">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
