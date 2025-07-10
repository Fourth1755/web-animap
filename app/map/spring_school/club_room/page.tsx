import { LocationContainer } from "../../component/locationContainer/locationContainer";
import LocationLiveChat from "../../component/locationLiveChat/locationLiveChat";
import MapHeader from "../../component/mapHeader/mapHeader";
import LocationPosition from "./components/locationPosition/locationPosition";


export default function Page() {
    let dropzoneStyle = {
        width: `100%`,
        height: `100vh`,
        backgroundImage: `url('https://wallpapers.com/images/hd/anime-school-background-leqbrpr0nc3aho8z.jpg')`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center center`,
        backgroundSize: `cover`
      };
    return (
    <div style={dropzoneStyle}>
      <MapHeader mapName="Club room" locationUrl="spring_school"/>
      <LocationContainer>
        <LocationPosition/>
        <LocationLiveChat/>
      </LocationContainer>
    </div>)
}