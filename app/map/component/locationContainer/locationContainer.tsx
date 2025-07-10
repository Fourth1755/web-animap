import React, { ReactNode } from 'react';
import './locationContainer.scss'
export const LocationContainer = ({ children }: { children: ReactNode }) => {
    return (
        <div className='location-container'>
            {children}
        </div>
    )
}