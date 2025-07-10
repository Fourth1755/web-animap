import { MapPositionPoint } from '@/app/map/component/mapPositionPoint/mapPositionPoint'
import './mapPosition.scss'

export default function MapPosition(){
    return (
        <div className="map-position-container">
            <div className='map-position-building-rooftop'>
                <MapPositionPoint 
                    link='building_rooftop' 
                    locationName='building rooftop' 
                    locationImage='https://wallpapers.com/images/high/anime-school-background-1kxla08umytrwgnk.webp' />
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
                    locationName='student council (ห้องสภานักเรียน)' 
                    locationImage='https://wallpapers.com/images/high/school-background-ehbb8cnmvnzsp7l1.webp'/>
            </div>
            <div className='map-position-meeting-room'>
                <MapPositionPoint 
                    link='meeting_room' 
                    locationName='meeting room (ห้องประชุม)' 
                    locationImage='https://wallpapers.com/images/high/anime-school-background-htdwf4q6ihnr4cwe.webp'/>
            </div>
        </div>
    )
}