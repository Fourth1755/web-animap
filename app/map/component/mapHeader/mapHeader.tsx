'use client'
import './mapHeader.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeXmark, faVolumeHigh, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import Link from 'next/link'

type Props = {
    mapName: string
    locationUrl?: string
}

export default function MapHeader(props :Props) {
    const [openSound,setOpenSound] = useState(false)
    const onChangeSound = () =>{
        setOpenSound(!openSound)
    }

    return (
        <div className="pl-16 flex items-center top-14 left-0 absolute">
            <Link href={props.locationUrl?`/map/${props.locationUrl}`:'/'}
                className='px-2 cursor-pointer'>
                <FontAwesomeIcon icon={faChevronLeft} className='chevron-left'/>
            </Link>
            <h1 className='text-header'>{props.mapName}</h1>
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