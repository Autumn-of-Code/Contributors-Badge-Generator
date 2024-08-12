import { Metadata } from 'next'
import { AuthProvider } from '../context/AuthContext'

export const metadata: Metadata = {
  title: 'Ticket | Autumn of Code',
  description: 'Ticket for Autumn of Code',
  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </AuthProvider>
  )
}
