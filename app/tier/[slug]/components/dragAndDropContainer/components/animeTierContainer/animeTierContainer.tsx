// Container.tsx
import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import { SortableContext, rectSortingStrategy } from '@dnd-kit/sortable';
import { AnimeSortableItem } from '../animeSortableItem/animeSortableItem';
import { AnimeItem } from '../../types';

interface ContainerProps {
  id: string;
  items: AnimeItem[];
}

export const AnimeTierContainer = ({ id, items }: ContainerProps) => {
  const { setNodeRef } = useDroppable({ id });

  return (
    <div className='bg-gray-800 border border-black flex'>
        <div>
            <h3>{id}</h3>
        </div>
        <SortableContext id={id} items={items} strategy={rectSortingStrategy}>
            <div ref={setNodeRef} className="grid grid-cols-4 gap-1 m-1 p-1 rounded-md py-8 w-full">
                {items.map((item) => (
                <AnimeSortableItem key={item.id} id={item.id} />
                ))}
            </div>
        </SortableContext>
    </div>
  );
};