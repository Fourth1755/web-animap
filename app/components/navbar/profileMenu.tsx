"use client";
import {
  Menu, 
  Typography, 
  Button, 
  MenuHandler, 
  Avatar, 
  MenuList, 
  MenuItem } from "../mtailwind";
import Link from "next/link";
import { useEffect, useState } from "react";
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
    {
      label: "Sign Out",
      icon: "PowerIcon",
      link: "/logout",
    },
  ];
type ProfileMenuProps = {
  user: UserInfo
}
export default function ProfileMenu(props :ProfileMenuProps) {
    const user = props.user
    const [isMenuOpen, setIsMenuOpen] = useState(false);
   
    const closeMenu = () => setIsMenuOpen(false);
    console.log(user.picture)
    return (
      <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
        <MenuHandler>
          <Button
            variant="text"
            color="blue-gray"
            className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
          >
            <Avatar
              variant="circular"
              size="md"
              alt="tania andrew"
              className="border border-gray-900 p-0.5"
              src={user.picture}
            />
          </Button>
        </MenuHandler>
        <MenuList className="p-1">
          {profileMenuItems.map(({ label, icon, link }, key) => {
            const isLastItem = key === profileMenuItems.length - 1;
            return (
              <MenuItem
                key={label}
                onClick={closeMenu}
                className={`flex items-center gap-2 rounded ${
                  isLastItem
                    ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                    : ""
                }`}
              >
                <Link href={link}>
                <Typography
                  as="span"
                  variant="small"
                  className="text-sm font-medium"
                  color={isLastItem ? "red" : "inherit"}
                >
                  {label} 
                </Typography>
                </Link>
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    );
  }