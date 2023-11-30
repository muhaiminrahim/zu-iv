"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { store } from "../redux/store";
import { Provider } from "react-redux";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="header center-container">
          <div className="center">
            <div>Header</div>
          </div>
        </div>
        <div style={{ height: "80vh" }}>
          <Provider store={store}>{children}</Provider>
        </div>
        <div className="footer center-container">
          <div className="center">Footer</div>
        </div>
      </body>
    </html>
  );
}
