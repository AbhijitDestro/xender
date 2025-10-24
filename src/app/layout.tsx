import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'

const dmsans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Xender",
  description: "AI Website Builder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (  
    <ClerkProvider>
      <html lang="en">
        <body className={`${dmsans.className} antialiased`}>
              {children}
        </body>
      </html>
    </ClerkProvider>
  );
}