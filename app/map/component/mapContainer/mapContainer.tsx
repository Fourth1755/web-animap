import React, { ReactNode } from 'react';
import './mapContainer.scss'
export const MapContainer = ({ children }: { children: ReactNode }) => {
    return (
        <div className='map-container'>
            {children}
        </div>
    )
}