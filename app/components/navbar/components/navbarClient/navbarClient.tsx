"use client";
import Link from "next/link";
import ProfileMenu from "../profileMenu/profileMenu";
import { useState } from "react";
import Sidebar from "../sidebar/sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function NavbarClient() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const handleClose = () => setSidebarOpen(false);
  
  return (
    <div className="w-full top-0 overflow-hidden left-0 -z-1 absolute">
      <nav className="bg-black">
        <div className="w-full sm:px-6 lg:px-8 flex py-3 items-center justify-between">
            <div className="flex items-center pl-5">
                <button
                  type="button"
                  onClick={() => setSidebarOpen(!isSidebarOpen)}
                  className="p-2 text-gray-500 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                >
                <FontAwesomeIcon icon={faBars} size="lg"/>
              </button>
              <div className="flex-shrink-0 pl-3">
                <Link href="/">
                <h1 className="font-medium text-pink-400 cursor-pointer text-xl">AniMap</h1></Link>
              </div>
            </div>
            <div>
              <ProfileMenu/>
            </div>
        </div>
      </nav>
      <Sidebar open={isSidebarOpen} onClose={handleClose} />
    </div>
  );
}
