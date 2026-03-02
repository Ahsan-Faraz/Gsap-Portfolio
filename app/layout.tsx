import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'Portfolio | Ahsan Faraz',
  description: 'Full Stack Developer | DevOps & Cloud Enthusiast',
  icons: {
    icon: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: "Space Grotesk", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif;
  --font-sans: "Space Grotesk", sans-serif;
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  )
}
