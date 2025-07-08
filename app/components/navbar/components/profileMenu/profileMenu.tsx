"use client";
import {
    Menu,
    Typography,
    Button,
    MenuHandler,
    Avatar,
    MenuList,
    MenuItem,
} from "../../../mtailwind";
import Link from "next/link";
import { useEffect, useState } from "react";
import { logOut } from "../../action";
import { useUser } from "../../../../context/userContext";
import LoginButton from "../loginButton/loginButton";
import { UserService } from "@/app/service/userService";
import AlertModal from "../../../alertModal/alertModal";
import { navigateToHomePage } from "./action";

export default function ProfileMenu() {
    const { user, loading, logout } = useUser();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => setIsMenuOpen(false);

    const [openModalAlert, setOpenModalAlert] = useState(false);
    const [message, setMessage] = useState("");

    const handleOpenAlert = () => setOpenModalAlert(!openModalAlert);
    const handlerResponseMessage = (message:string) => {
        setMessage(message)
        handleOpenAlert()
    }

    const handleNextAction =()=>{
      logout()
      navigateToHomePage()
    }

    const onClickLogOut = () => {
      const userService = new UserService()
      userService.logout().then((res)=>{
        handlerResponseMessage(res.message)
      }).catch((error)=>handlerResponseMessage(error.response.data.message))
    }

    
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
    
    return (
      <>
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
              onClick={onClickLogOut}
              >
                <Typography
                  className="text-sm font-medium"
                  color="red"
                >
                  Log out
                </Typography>
            </MenuItem>
          </MenuList>
        </Menu>
        <AlertModal
            open={openModalAlert}
            handler={handleOpenAlert}
            message={message}
            handleNextAction={handleNextAction}
        />
      </>
    );
}
