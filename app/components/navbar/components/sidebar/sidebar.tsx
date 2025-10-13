"use client";
import {
  faBars,
  faNewspaper,
  faMusic,
  faRankingStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useState } from "react";

type PropsSidebar = {
  open: boolean;
  onClose: any;
};

export default function Sidebar(props: PropsSidebar) {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setIsOpen(props.open);
  }, [props.open]);

  const closeSideBar = () => {
    props.onClose();
    setIsOpen(false);
  };

  return (
    <div>
      <div
        onClick={closeSideBar}
        className={`fixed inset-0 bg-black bg-opacity-70 z-40 transition-opacity duration-300 ease-in-out
              ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      ></div>
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-black shadow-xl z-50 transform transition-transform duration-300 ease-in-out px-4
              ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center pl-5 pt-5">
          <button
            type="button"
            onClick={closeSideBar}
            className="p-2 text-gray-500 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <FontAwesomeIcon icon={faBars} size="lg" />
          </button>
          <div className="flex-shrink-0 pl-3">
            <Link 
              href="/"
              onClick={closeSideBar}>
              <h1 className="font-medium text-pink-400 cursor-pointer text-xl">
                AniMap
              </h1>
            </Link>
          </div>
        </div>
        <div className="py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                href="#"
                onClick={closeSideBar}
                className="flex items-center p-2 rounded-lg hover:bg-gray-800 group"
              >
                <FontAwesomeIcon icon={faNewspaper} size="lg" />
                <span className="flex-1 ms-3 whitespace-nowrap">Anime</span>
              </Link>
            </li>
            <li>
              <Link
                href="/tier"
                onClick={closeSideBar}
                className="flex items-center p-2 rounded-lg  hover:bg-gray-800 group"
              >
                <FontAwesomeIcon icon={faRankingStar} size="lg" />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Anime Tier
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                onClick={closeSideBar}
                className="flex items-center p-2  rounded-lg  hover:bg-gray-800 group"
              >
                <FontAwesomeIcon icon={faMusic} size="lg" />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Anime Song
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
