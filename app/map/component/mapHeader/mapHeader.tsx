'use client'
import './mapHeader.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeXmark, faVolumeHigh, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

type Props = {
    map_name: string
}

export default function MapHeader(props :Props) {
    const [openSound,setOpenSound] = useState(false)
    const onChangeSound = () => {
        setOpenSound(!openSound)
    }

    return (
        <div className="pt-16 pl-16 flex items-center h-36">
            <div
                className='px-2 cursor-pointer'>
                <FontAwesomeIcon icon={faChevronLeft} className='chevron-left'/>
            </div>
            <h1 className='text-header'>{props.map_name}</h1>
            <div 
                onClick={onChangeSound}
                className='px-4'>
                {openSound?
                    <FontAwesomeIcon icon={faVolumeXmark} className="volume" />:
                    <FontAwesomeIcon icon={faVolumeHigh} className="volume" />}
            </div>
        </div>
        )
}