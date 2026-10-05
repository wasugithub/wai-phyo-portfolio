import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wai Phyo Paing | Junior Software Developer",
  description:
    "Portfolio of Wai Phyo Paing, a Computer Science graduate and junior software developer specializing in web development and modern software technologies.",
  keywords: [
    "Wai Phyo Paing",
    "Software Developer",
    "Web Developer",
    "Junior Software Developer",
    "Next.js",
    "React",
    "Vue.js",
    "Node.js",
    "Express.js",
    "Myanmar Developer",
  ],
  authors: [
    {
      name: "Wai Phyo Paing",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}