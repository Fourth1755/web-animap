import { MapContainer } from '../component/mapContainer/mapContainer'
import MapHeader from '../component/mapHeader/mapHeader'
import MapShowUser from '../component/mapShowUser/mapShowUser'
import MapPosition from './components/mapPosition/mapPosition'
import './springSchool.scss'
export default function SpringSchool() {

    return (
        <div className="map-background">
            <MapHeader map_name="Spring School"/>
            <MapContainer>
                <MapPosition/>
                <MapShowUser/>
            </MapContainer>
        </div>
    )
}