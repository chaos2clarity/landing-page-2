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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.25/dist/katex.min.css" integrity="sha384-WcoG4HRXMzYzfCgiyfrySxx90XSl2rxY5mnVY5TwtWE6KLrArNKn0T/mOgNL0Mmi" crossOrigin="anonymous" />
        <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.25/dist/katex.min.js" integrity="sha384-J+9dG2KMoiR9hqcFao0IBLwxt6zpcyN68IgwzsCSkbreXUjmNVRhPFTssqdSGjwQ" crossOrigin="anonymous"></script>
        <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.25/dist/contrib/auto-render.min.js" integrity="sha384-hCXGrW6PitJEwbkoStFjeJxv+fSOOQKOPbJxSfM6G5sWZjAyWhXiTIIAmQqnlLlh" crossOrigin="anonymous"
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener("DOMContentLoaded", function() {
                console.log('KaTeX auto-render starting...');
                renderMathInElement(document.body, {
                  delimiters: [
                    {left: '\\\\(', right: '\\\\)', display: false},
                    {left: '\\\\[', right: '\\\\]', display: true}
                  ],
                  throwOnError: false,
                  errorColor: '#cc0000',
                  strict: false
                });
                console.log('KaTeX auto-render completed');
              });
            `
          }}
        />
      </head>
      <body className="font-alternate antialiased bg-zinc-900">
        <ThemeProvider>
          {/* <AuthProvider> */}
            <div className="flex min-h-screen flex-col bg-zinc-900">
              <Header />
              <main className="flex-grow">
                {children}
              </main>
            </div>
          {/* </AuthProvider> */}
        </ThemeProvider>
      </body>
    </html>
  )
}
