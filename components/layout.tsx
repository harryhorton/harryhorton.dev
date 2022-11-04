import Navbar from "./navbar";
import { ReactNode } from "react";

export default function Layout({ children }: { children?: ReactNode }) {
  return (
    <div className="bg-gray-100 min-h-screen text-gray-900">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
