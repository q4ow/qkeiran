import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "~/components/ThemeProvider";
import { Navbar } from "~/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | qkeiran",
    default: "qkeiran",
  },
  description: "move fast and break stuff",
  metadataBase: new URL("https://qkeiran.vercel.app"),
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  colorScheme: "light dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
