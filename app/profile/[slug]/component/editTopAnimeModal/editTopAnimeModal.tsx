"use client";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Textarea,
  Select,
  Option,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import "./editTopAnimeModal.scss";
import { GetMyAnimeByUserUUIDResponse } from "@/app/service/dtos/myAnime";

type AnimeData = {
    id: number;
    name: string;
    name_english: string;
    episodes: number;
    seasonal: string;
    image: string;
    description: string;
    duration: string;
    year: string;
    type: number;
    wallpaper: string;
};

type PropsEditTopAnimeModal = {
    open: boolean;
    handler: () => void;
    user: string;
    myAnimeList: GetMyAnimeByUserUUIDResponse[];
};

export default function EditTopAnimeModal(prop: PropsEditTopAnimeModal) {
    const open = prop.open;
    const handleOpen = prop.handler;
    const userId = prop.user

    const [formData, setFormData] = useState("");
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement> | any) => {
        const { value } = event.target;
        setFormData(value);
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
      >
        <div className="modalStyles">
          <div></div>
          <div className="px-16 py-4">
            <h1 className="mb-2 text-lg font-medium text-pink-500 lg:text-sm">
            My top anime
            </h1>
            <div className="py-4">
                <Input
                        label="Find a anime"
                        value={formData}
                        name="search"
                        onChange={handleInputChange}
                    /> 

                <div>
                  
                </div>
            </div>
          </div>
        </div>
      </Dialog>
    </>
    );
}
