import "./globals.css";
import { Figtree } from "next/font/google";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

const font = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: 'Spotify by Jax',
  description: 'Listen!'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
      </body>
    </html>
  );
}
