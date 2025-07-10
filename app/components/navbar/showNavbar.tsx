import { headers } from "next/headers";
import Navbar from "./navbar";
import NavbarMap from "./navbarMap";

export default async function ShowNavbar() {
  const headerList = await headers();
  const pathname = headerList.get("x-current-path");

  const isMapPage = pathname?.startsWith('/map') ?? false;
  const isAuthPage = pathname ? ['/login', '/register'].includes(pathname) : false;

  const showNavbar = !isMapPage && !isAuthPage;
  const showNavbarMap = isMapPage;
  return (
    // <Navbar/>
    <>
      {showNavbar && <Navbar />}
      {showNavbarMap && <NavbarMap />}
    </>
  );
}