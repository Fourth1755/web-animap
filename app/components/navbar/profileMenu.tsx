"use client";
import {
  Menu,
  Typography,
  Button,
  MenuHandler,
  Avatar,
  MenuList,
  MenuItem,
} from "../mtailwind";
import Link from "next/link";
import { useEffect, useState } from "react";
import { logOut } from "./action";
import { useUser } from "../../context/userContext";
import LoginButton from "./components/loginButton/loginButton";

// profile menu component
const profileMenuItems = [
  {
    label: "My Profile",
    icon: "UserCircleIcon",
    link: "/profile",
  },
  {
    label: "Edit Profile",
    icon: "Cog6ToothIcon",
    link: "",
  },
];

export default function ProfileMenu() {
  const { user, loading, logout } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  if (loading) {
    return (
      <div className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto">
        <div className="h-10 w-10 animate-pulse rounded-full bg-gray-300"></div>
      </div>
    );
  }

  if (!user) {
    return <LoginButton />;
  }

  const navigateToMyProfile = () => {

  }
  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          {user.profile_image!=""?
          <Avatar
            variant="circular"
            size="md"
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
            src={user.profile_image}
          />:          
          <Avatar
            variant="circular"
            size="md"
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
          />}
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {/* <div>
          {profileMenuItems.map((item, index) => {
            return (
              <div key={index}>
              <Link href={item.link}>
                <MenuItem
                  key={item.label}
                  onClick={closeMenu}
                  className="flex items-center gap-2 rounded"
                >
                  <Typography
                    as="span"
                    variant="small"
                    className="text-sm font-medium"
                    color="inherit"
                  >
                    {item.label}
                  </Typography>
                </MenuItem>
              </Link>
              </div>

            );
          })}
        </div> */}
        <Link href={`/profile/${user.uuid}`}>
        <MenuItem 
          className="flex items-center gap-2 rounded hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
          >
            <Typography
              as="span"
              variant="small"
              className="text-sm font-medium"
              color="red"
            >
              My Profile
            </Typography>
        </MenuItem>
        </Link>
        <MenuItem 
          className="flex items-center gap-2 rounded hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
          onClick={logout}
          >
            <Typography
              as="span"
              variant="small"
              className="text-sm font-medium"
              color="red"
            >
              Log out
            </Typography>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
