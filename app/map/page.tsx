'use client'
import { useEffect, useState } from 'react';
import MapListSlider from "./component/mapListSlider/mapListSlider";
import AlertLoginModal from '../components/alertModalLogin/alertLoginModal';
import { useUser } from '../context/userContext';

const mapList = [
    {
        id:"1",
        name:"Night In Tokyo",
        image:"https://images7.alphacoders.com/607/607021.jpg",
        map_path:"night_in_tokyo"
    },
    {
        id:"2",
        name:"Spring School",
        image:"https://wallpapers.com/images/hd/school-background-gnf7tpb6pr79lmyj.jpg",
        map_path:"spring_school"
    },
    {
        id:"3",
        name:"Cave Fantacy",
        image:"https://wallpapers.com/images/hd/fantasy-anime-1280-x-720-wallpaper-7uy30qxtjfznd5fs.jpg",
        map_path:"cave_fantacy"
    },
]

export default function Page() {
    const [open, setOpen] = useState(false);
    const { user, loading } = useUser();

    useEffect(() => {
        if (!loading && !user) {
            setOpen(true);
        }
    }, [user, loading]);

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <div className="pt-48">
            <MapListSlider mapList={mapList} user={user} loading={loading} handleOpen={handleOpen}/>
            <AlertLoginModal open={open} handler={handleOpen} />
        </div>
    );
}