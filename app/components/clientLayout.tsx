"use client"

import { usePathname } from 'next/navigation'
import Navbar from "./navbar/navbar";
import { ReactNode } from 'react'

export default function ClientLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const hideNavbarRoutes = ['/login','/register']
  const showNavbar = !hideNavbarRoutes.includes(pathname)

  return (
    <>
      {showNavbar && <Navbar />}
      {children}
    </>
  )
}