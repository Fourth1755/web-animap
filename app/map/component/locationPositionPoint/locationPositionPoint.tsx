import './locationPositionPoint.scss'
type Props = {
    locationName: string
    message: string
}

export const LocationPositionPoint =(props:Props)=> {

    return (
        <div className="tooltip">
            <div 
                className="w-8 h-8 rounded-full bg-black bg-opacity-25 cursor-pointer flex items-center justify-center border-gray-400 border-2 hover:bg-opacity-55"
                data-tooltip-target="tooltip-default">
                <div className="location-position-point-inside"></div>
            </div>
            <div className="tooltiptext">
                <h1 className='p-2 text-black'>{props.locationName}</h1> 
                <p className='text-gray-700 px-1 text-sm'>{props.message}</p>       
            </div>
        </div>
    )
}