// Container.tsx
import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import { SortableContext, rectSortingStrategy } from '@dnd-kit/sortable';
import { AnimeSortableItem } from '../animeSortableItem/animeSortableItem';
import { AnimeItemResponse } from '../../types';

interface ContainerProps {
  id: string;
  items: AnimeItemResponse[];
  color: string
}


export const AnimeTierContainer = ({ id, items,color }: ContainerProps) => {
  const { setNodeRef } = useDroppable({ id });

  return (
    <div className='bg-gray-900 border border-black flex'>
        <div className='w-20 flex flex-col justify-center items-center' style={{backgroundColor:color}}>
            <h1 className='text-2xl text-black'>{id}</h1>
        </div>
        <SortableContext id={id} items={items} strategy={rectSortingStrategy}>
            <div ref={setNodeRef} className="grid grid-cols-12 m-1 p-1 rounded-md py-8 w-full">
                {items.map((item) => (
                <AnimeSortableItem key={item.id} id={item.id} anime={item}/>
                ))}
            </div>
        </SortableContext>
    </div>
  );
};