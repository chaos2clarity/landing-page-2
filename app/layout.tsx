import "./css/style.css";

// import { Inter } from "next/font/google";
// 
// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter",
//   display: "swap",
// });

import { ThemeProvider } from '@/components/theme-provider'

export const metadata = {
  title: "{clarity}",
  description: "notion for science",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className="font-georgia tracking-tight text-black/90 antialiased"
      >
        <ThemeProvider>
          <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
