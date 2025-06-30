import { headers } from "next/headers";
import Navbar from "./navbar";
import NavbarMap from "./navbarMap";

export default async function ShowNavbar() {
  const headerList = headers();
  const pathname = headerList.get("x-current-path");
  const listOfAnimeMap = ['/map/spring_school','/map/cave_fantacy','/map/nigth_in_tokyo']
  const hideNavbarRoutes = ['/login','/register']
  const resultHideNavbarRoutes = hideNavbarRoutes.concat(listOfAnimeMap)
  let showNavbar = true
  let showNavbarMap = true
  if (pathname != null) {
    showNavbar = !resultHideNavbarRoutes.includes(pathname)
    showNavbarMap = listOfAnimeMap.includes(pathname)
  }
  return (
    <>
      {showNavbar && <Navbar />}
      {showNavbarMap && <NavbarMap />}
    </>
    // <Navbar/>
  )
}