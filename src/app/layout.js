"use client";

import { useEffect } from "react";
import "./globals.css";
import Header from "@/components/Header";
import { useState } from "react";
import { metadata } from "./metadata";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    document.title = metadata.title;
  }, []);

  return (
    <html lang="en" className={darkMode ? "dark" : ""}>
      <body>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
