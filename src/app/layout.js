"use client"

import { Inter } from 'next/font/google'
import './globals.css'
import { AuthContext } from '../../contexts/AuthContext'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  const [user, setUser] = useState(null)

  return (
    <html lang="en">
      <AuthContext.Provider value={{ user, setUser }}>
        <body className={inter.className}>{children}</body>
      </AuthContext.Provider>

    </html>
  )
}
