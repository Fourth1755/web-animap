import { MapPositionPoint } from '@/app/map/component/mapPositionPoint/mapPositionPoint'
import './mapPosition.scss'

export default function MapPosition(){
    return (
        <div className="map-position-container">
            <div className='map-position-building-rooftop'>
                <MapPositionPoint 
                    link='building_rooftop' 
                    locationName='building rooftop' 
                    locationImage='' />
            </div>
            <div className='map-position-club-room'>
                <MapPositionPoint 
                    link='club_room' 
                    locationName='club room (ห้องชมรม)' 
                    locationImage='https://wallpapers.com/images/hd/anime-school-background-leqbrpr0nc3aho8z.jpg'/>
            </div>
            <div className='map-position-library'>
                <MapPositionPoint 
                    link='library' 
                    locationName='library' 
                    locationImage=''/>
            </div>
            <div className='map-position-student-council'>
                <MapPositionPoint 
                    link='student_council' 
                    locationName='student council' 
                    locationImage=''/>
            </div>
        </div>
    )
}