import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import { SpeedInsights } from '@vercel/speed-insights/next';

import { Analytics } from '@vercel/analytics/react';

import "./globals.css";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] 
});

export const metadata: Metadata = {
  title: "Portfolio Guna",
  description: "Portfolio Guna",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body 
        className={poppins.className}
      >
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
