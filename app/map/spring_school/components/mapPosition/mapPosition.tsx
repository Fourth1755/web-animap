import { MapPositionPoint } from '@/app/map/component/mapPositionPoint/mapPositionPoint'
import './mapPosition.scss'

export default function MapPosition(){
    return (
        <div className="map-position-container">
            <div className='map-position-building-rooftop'>
                <MapPositionPoint link='building-rooftop' location_name='building-rooftop' location_image='' />
            </div>
            <div className='map-position-club-room'>
                <MapPositionPoint link='club-room' location_name='club-room' location_image=''/>
            </div>
            <div className='map-position-library'>
                <MapPositionPoint link='library' location_name='library' location_image=''/>
            </div>
            <div className='map-position-student-council'>
                <MapPositionPoint link='student-council' location_name='student-council' location_image=''/>
            </div>
        </div>
    )
}