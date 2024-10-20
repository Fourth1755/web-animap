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
// import Modal from "@mui/material/Modal";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
// import { useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from 'react-redux'

// import TextField from "@mui/material/TextField";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
//
// import axios from "axios";
// import { fetchAnimeByAccountAsync } from "../../actions/animeDetailListAction";

// const AddAnimeModal = (props) => {
//   const { open, onClose, anime } = props;
//   const [modalAnime, setModalAnime] = useState([]);
//   const [score, setScore] = useState();
//   const [year, setYear] = useState();

//   const onChangItem = (name) => (event) => {
//     if (name == "score") {
//       setScore(event.target.value);
//     } else if (name == "year") {
//       console.log(event.format("YYYY"));
//       setYear(event.format("YYYY"));
//     }
//   };
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (anime && open) {
//       setModalAnime(anime);
//       setScore("");
//       setYear(null);
//     }
//   }, [anime, open]);
//   const MySwal = withReactContent(Swal);
//   //const myAnimeList = useSelector(state => state.myAnimeList)
//   const { user } = useSelector((state) => state.auth);
//   const dispatch = useDispatch();
//   const addAnimeToList = () => {
//     onClose();
//     if (user) {
//       MySwal.fire({
//         title: <p>Loading</p>,
//         didOpen: () => {
//           // `MySwal` is a subclass of `Swal` with all the same instance & static methods
//           MySwal.showLoading();
//           axios
//             .post(`http://localhost:5000/createAnimeDetail`, {
//               animeDetails_animes_id: anime.animes_id,
//               animeDetails_users_id: user.accounts_id,
//               animedetails_watchYear: year,
//               animedetails_score: score,
//             })
//             .then((response) => {
//               MySwal.fire({
//                 title: <strong>Good job!</strong>,
//                 html: <i>Successfully added to list</i>,
//                 icon: "success",
//               });
//               dispatch(fetchAnimeByAccountAsync(user.accounts_id));
//             })
//             .catch((error) => {
//               MySwal.fire("Alert", error, "error");
//             });
//         },
//       }).then(() => {
//         return MySwal.fire(<p>Shorthand works too</p>);
//       });
//     } else {
//       MySwal.fire({
//         icon: "info",
//         title: "You need to login",
//         showCancelButton: true,
//         confirmButtonText: "Login Now",
//       }).then((result) => {
//         if (result.isConfirmed) {
//           navigate(`/login`);
//         }
//       });
//     }
//   };
//   return (
//     <Modal
//       open={open}
//       onClose={onClose}
//       aria-labelledby="modal-modal-title"
//       aria-describedby="modal-modal-description"
//     >

//         <div className="modal-buttom">
//           <div>
//             <h2>Status</h2>
//             <h1>Watched</h1>
//           </div>
//           <div>
//             <h2>My score</h2>
//           </div>
//           <div>
//             <h2>Watch in</h2>
//             <FormControl className="modal-select" fullWidth>
//               <LocalizationProvider dateAdapter={AdapterDayjs}>
//                 <DatePicker
//                   views={["year"]}
//                   value={year}
//                   hiddenLabel
//                   name="year"
//                   minDate={dayjs("1950")}
//                   maxDate={dayjs()}
//                   onChange={onChangItem("year")}
//                   renderInput={(params) => (
//                     <TextField {...params} helperText={null} />
//                   )}
//                 />
//               </LocalizationProvider>
//             </FormControl>
//           </div>
//           <div>
//             <button className="modal-button-addtolist" onClick={addAnimeToList}>
//               Add to List
//             </button>
//           </div>
//         </div>
//       </div>
//     </Modal>
//   );
// };

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

type PropsAddAnimeModal = {
  open: boolean;
  handler: () => void;
  isEdit: boolean;
  anime: AnimeData;
  user: string;
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
    yearAnimeList.push(yearString);
  }
}

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
    };
    console.log(request)
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
  };

  useEffect(() => {
    if (animeData?.year) {
      setYearAnimeDropDown(animeData?.year);
    }
  });
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
