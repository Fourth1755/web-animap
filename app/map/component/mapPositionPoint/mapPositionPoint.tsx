import './mapPositionPoint.scss'
type Props = {
    link: string
    location_name: string
    location_image: string
}

export const MapPositionPoint =(props:Props)=> {
    return (
        <div className="tooltip">
            <div 
                className="w-8 h-8 rounded-full bg-black bg-opacity-25 cursor-pointer flex items-center justify-center border-gray-400 border-2 hover:bg-opacity-55"
                data-tooltip-target="tooltip-default">
                <div className="map-position-point-inside"></div>
            </div>
            <div className="tooltiptext">               
                <h1>{props.location_name}</h1>
            </div>
        </div>

    )
}