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
import "./addAnimeListModal.scss";
import AddAnimeToList from "./action";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import { CreateAnimeRequest } from "@/app/service/dtos/anime";
import { AddAnimeToListRequest } from "@/app/service/dtos/myAnime";

type PropsAddAnimeModal = {
  open: boolean;
  handler: () => void;
  isEdit: boolean;
  anime: CreateAnimeRequest;
  user: string;
};

type FormData = {
  user_uuid: string;
  anime_id: number;
  score: string;
  year: string;
};

const scoreList = [
  // { id: "1", name: "Dislike" },
  // { id: "2", name: "Movie" },
  // { id: "3", name: "Movie" },
  // { id: "4", name: "Movie" },
  { id: "5", name: "Normal" },
  { id: "6", name: "Movie" },
  { id: "7", name: "Like" },
  { id: "8", name: "Movie" },
  { id: "9", name: "Movie" },
  { id: "10", name: "Lover" },
];



export default function AddAnimeModal(prop: PropsAddAnimeModal) {
  const open = prop.open;
  const handleOpen = prop.handler;
  const isEdit = prop.isEdit;
  const animeData = prop.anime;
  const userId = prop.user
  let dropzoneModalStyle = {
    width: `100%`,
    height: `420px`,
    backgroundImage: `url(${animeData?.wallpaper})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center center`,
    backgroundSize: `cover`,
    borderTopLeftRadius: `15px`,
    borderTopRightRadius: `15px`,
  };
  const [formData, setFormData] = useState<FormData>({
    user_uuid: "",
    anime_id: 0,
    score: "",
    year: "",
  });
  const [yearAnimeList , setYearAnimeList] = useState<string[]>([])

  function setYearAnimeDropDown(year: string) {
    const yearNow = new Date().getFullYear();
    let yearList = yearAnimeList;
    for (let i = +year; i <= yearNow; i++) {
      let yearString = i.toString();
      if(yearList.indexOf(yearString) == -1){
        yearList.push(yearString);
      }
    }
    setYearAnimeList(yearList)
  }

  const handleChangeScore = (val = "") => {
    setFormData({ ...formData, score: val });
  };
  const handleChangeYear = (val = "") => {
    setFormData({ ...formData, year: val });
  };

  const handleSubmit = async () => {
    const MySwal = withReactContent(Swal);

    const request: AddAnimeToListRequest = {
      user_uuid: userId,
      anime_id: animeData.id,
      score: +formData.score,
      status: 1,
      watched_year: formData.year,
    };
    handleOpen();
    MySwal.fire({
      title: <p>Loading</p>,
      didOpen: () => {
        MySwal.showLoading();
        AddAnimeToList(request)
          .then((response) => {
            MySwal.fire({
              title: <strong>Good job!</strong>,
              html: <i>Successfully added to list</i>,
              icon: "success",
            });
          })
          .catch((error) => {
            MySwal.fire("Alert", error, "error");
          });
      },
    });
    // setYearAnimeList([])
  };

  useEffect(() => {
    if (animeData?.year) {
      setYearAnimeDropDown(animeData?.year);
    }
  },[]);
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
          <div style={dropzoneModalStyle}></div>
          <div className="px-16 py-4 justify-between flex">
            <div>
              <h1 className="mb-2 text-lg font-extrabold text-pink-500 lg:text-xl ">
                AniMap Score
              </h1>
              <p className="text-xl font-normal text-gray-400 lg:text-xl">
                10/10
              </p>
            </div>
            <div>
              <h1 className="mb-2 text-lg font-extrabold text-pink-500 lg:text-xl ">
                Score
              </h1>
              <div>
                <Select
                  variant="outlined"
                  label="Choose a Score"
                  color="green"
                  value={formData.score}
                  name="score"
                  onChange={handleChangeScore}
                >
                  {scoreList.map((item) => (
                    <Option key={item.id} value={item.id}>
                      {item.id}
                    </Option>
                  ))}
                </Select>
              </div>
            </div>
            <div>
              <h1 className="mb-2 text-lg font-extrabold text-pink-500 lg:text-xl">
                Watched
              </h1>
              <Select
                variant="outlined"
                label="Choose a year"
                color="green"
                value={formData.year}
                name="year"
                onChange={handleChangeYear}
              >
                {yearAnimeList.map((item) => (
                  <Option key={item} value={item}>
                    {item}
                  </Option>
                ))}
              </Select>
            </div>
            <div>
              <Button
                onClick={() => handleSubmit()}
                className="bg-pink-500 py-4 px-8 mt-8"
              >
                Add
              </Button>
            </div>
          </div>
          <div className="modal-header"></div>
        </div>
        <DialogBody className="space-y-4 pb-6"> </DialogBody>
      </Dialog>
    </>
  );
}
