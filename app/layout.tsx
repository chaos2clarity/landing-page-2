import { ThemeProvider } from '@/contexts/ThemeContext'
import { Header } from '@/components/header'
import "./css/style.css"
// import { AuthProvider } from '@/lib/auth-context'

export const metadata = {
  title: "{clarity}",
  description: "notion for science",
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
          {/* <AuthProvider> */}
            <div className="flex min-h-screen flex-col bg-white dark:bg-zinc-900">
              <Header />
              <main className="flex-grow pt-16">
                {children}
              </main>
            </div>
          {/* </AuthProvider> */}
        </ThemeProvider>
      </body>
    </html>
  )
}
