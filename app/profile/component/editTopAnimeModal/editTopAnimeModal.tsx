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
import AddAnimeToList from "./action";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
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

type FormData = {
  user_uuid: string;
  anime_id: number;
  score: string;
  year: string;
};

type AddAnimeToListRequest = {
  user_uuid: string;
  anime_id: number;
  score: number;
  status: number;
};

const scoreList = [
  { id: "1", name: "Dislike" },
  { id: "2", name: "Movie" },
  { id: "3", name: "Movie" },
  { id: "4", name: "Movie" },
  { id: "5", name: "Normal" },
  { id: "6", name: "Movie" },
  { id: "7", name: "Like" },
  { id: "8", name: "Movie" },
  { id: "9", name: "Movie" },
  { id: "10", name: "Lover" },
];
const yearAnimeList: string[] = [];

function setYearAnimeDropDown(year: string) {
  const yearNow = new Date().getFullYear();
  for (let i = +year; i <= yearNow; i++) {
    let yearString = i.toString();
    if(yearAnimeList.indexOf(yearString) == -1){
      yearAnimeList.push(yearString);
    }
  }
}

export default function EditTopAnimeModal(prop: PropsEditTopAnimeModal) {
  const open = prop.open;
  const handleOpen = prop.handler;
  const userId = prop.user

    const [formData, setFormData] = useState("");
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement> | any) => {
        const { value } = event.target;
        setFormData(value);
    }


//   const handleSubmit = async () => {
//     const MySwal = withReactContent(Swal);

//     console.log(request)
//     handleOpen();

//   };

//   useEffect(() => {
//     if (animeData?.year) {
//       setYearAnimeDropDown(animeData?.year);
//     }
//   },[animeData]);
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
                                crossOrigin={undefined}
                                value={formData}
                                name="search"
                                onChange={handleInputChange}
                            />
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
}
