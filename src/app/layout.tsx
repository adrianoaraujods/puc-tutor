import { Geist, Geist_Mono } from "next/font/google";

import { RootProvider } from "fumadocs-ui/provider";
import { ThemeProvider } from "next-themes";

import { translations } from "@/app/content/[[...slug]]/docs.config";

import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} overflow-x-hidden font-sans antialiased [--navbar-height:calc(theme(spacing.14))]`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
          enableSystem
        >
          <RootProvider i18n={{ locale: "pt-BR", translations }}>
            {children}
          </RootProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
