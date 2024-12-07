import { ThemeProvider } from '@/contexts/ThemeContext'
import { Header } from '@/components/header'
import "./css/style.css"

export const metadata = {
  title: "{clarity}",
  description: "notion for science",
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-georgia antialiased">
        <ThemeProvider>
          <div className="flex min-h-screen flex-col bg-white dark:bg-zinc-900">
            <Header />
            <main className="flex-grow pt-16">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
