import type { Metadata } from "next";
import { Playfair_Display, Great_Vibes } from "next/font/google"; // Elegant fonts
import "./globals.css";

// Elegant body font
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
});

// Elegant heading font
const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Our Wedding",
  description: "Welcome to our wedding website",
  icons: {
    icon: "/images/logo.webp",
    apple: "/images/logo.webp",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <head>
        <link rel="icon" href="/images/logo.webp" type="image/webp" />
      </head>
      <body
        className={`${playfair.variable} ${greatVibes.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
