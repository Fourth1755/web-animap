import { headers } from "next/headers";
import Navbar from "./navbar";

export default async function ShowNavbar() {
  const headerList = headers();
  const pathname = headerList.get("x-current-path");
  const hideNavbarRoutes = ['/login','/register']
  let showNavbar = true
  if (pathname != null) {
    showNavbar = !hideNavbarRoutes.includes(pathname)
  }
  return (
    <>
      {showNavbar && <Navbar />}
    </>
    // <Navbar/>
  )
}