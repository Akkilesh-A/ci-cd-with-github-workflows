import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: "600",
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Testing out Deployments",
  description: "A simple test to see if deployments work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{ backgroundColor: "#f3f4f6" }}
        className={`${montserrat.className}`}
      >
        {children}
      </body>
    </html>
  );
}
