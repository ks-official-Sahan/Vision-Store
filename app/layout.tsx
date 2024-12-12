import type { Metadata } from "next";
import "@mantine/core/styles.css";
import "@/styles/globals.css";
import "@/styles/loading.css";
import { siteMetadata } from "@/data";
import { ThemeProvider } from "@/context/theme-provider";
import { MantineProvider } from "@mantine/core";

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* <body className={`antialiased`}> */}
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MantineProvider withGlobalClasses>
            <main className="relative min-h-dvh w-screen overflow-x-hidden bg-white dark:bg-black">
              {children}
            </main>
          </MantineProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
