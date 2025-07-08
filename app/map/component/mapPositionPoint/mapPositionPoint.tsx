import './mapPositionPoint.scss'
type Props = {
    link: string
    location_name: string
    location_image: string
}

export const MapPositionPoint =(props:Props)=> {
    return (
        <div>
            <div 
                className="w-8 h-8 rounded-full bg-black bg-opacity-25 cursor-pointer flex items-center justify-center border-gray-400 border-2"
                data-tooltip-target="tooltip-default">
                <div className="map-position-point-inside"></div>
            </div>
            <div id="tooltip-default" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700">
    Tooltip content
    <div className="tooltip-arrow" data-popper-arrow></div>
</div>
        </div>

    )
}