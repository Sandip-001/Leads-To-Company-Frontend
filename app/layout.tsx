import type { Metadata } from "next";
import "./globals.css";
import { ToasterProvider } from "@/components/ui/toaster";
import { AuthProvider } from "./provider";

export const metadata: Metadata = {
  title: "Leads To Company",
  description: "Best IT Industry in Kolkata",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <ToasterProvider />
        {/* ✅ Wrap all routes (public & main) with AuthProvider */}
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
