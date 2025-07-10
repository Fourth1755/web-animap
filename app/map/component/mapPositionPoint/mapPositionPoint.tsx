import Link from 'next/link'
import './mapPositionPoint.scss'
type Props = {
    link: string
    locationName: string
    locationImage: string
}

export const MapPositionPoint =(props:Props)=> {
    let dropzoneStyle = {
        width: `100%`,
        height: `100%`,
        backgroundImage: `url('${props.locationImage}')`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center center`,
        backgroundSize: `cover`,
        borderBottomRightRadius: `6px`,
        borderBottomLeftRadius: `6px`,
      };
    return (
        <Link className="tooltip" href={`spring_school/${props.link}`}>
            <div 
                className="w-8 h-8 rounded-full bg-black bg-opacity-25 cursor-pointer flex items-center justify-center border-gray-400 border-2 hover:bg-opacity-55"
                data-tooltip-target="tooltip-default">
                <div className="map-position-point-inside"></div>
            </div>
            <div className="tooltiptext">
                <h1 className='p-2 text-black'>{props.locationName}</h1>
                <div style={dropzoneStyle}>
                    
                </div>            
            </div>
        </Link>

    )
}