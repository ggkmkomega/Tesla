import "~/styles/globals.css";

import { Inter } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import { ThemeProvider } from "~/providers/theme-provider";

export const metadata: Metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <TRPCReactProvider>
          <ThemeProvider forcedTheme="light">{children}</ThemeProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
