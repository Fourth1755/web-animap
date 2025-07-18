"use client";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import { navigateToLoginPage } from "./action";

type PropsAlertLoginModal = {
    open: boolean;
    handler: () => void;
};

export default function AlertLoginModal(prop: PropsAlertLoginModal) {
  const {open} = prop;
  const handleOpen = prop.handler;
  const router = useRouter()

  const handleLogin = () => {
    navigateToLoginPage()
  }

  return (
    <>
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
        size="sm"
        className="bg-black"
      >
        <DialogHeader className="grid place-items-center gap-4">
            <h1 className="mb-2 text-lg font-extrabold text-pink-500 lg:text-xl ">
                Please Login
              </h1>
        </DialogHeader>
        <DialogBody>
              <p className="text-xl font-normal text-gray-400 lg:text-xl">
                You need to login to access this page.
              </p>
        </DialogBody>
        <DialogFooter className="justify-center">
            <Button
              onClick={() => handleLogin()}
              className="bg-pink-500 py-4 px-8 mt-8"
            >
              Login
            </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}