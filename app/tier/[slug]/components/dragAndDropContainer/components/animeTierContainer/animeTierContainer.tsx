// Container.tsx
import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import { SortableContext, rectSortingStrategy } from '@dnd-kit/sortable';
import { AnimeSortableItem } from '../animeSortableItem/animeSortableItem';

interface ContainerProps {
  id: string;
  items: string[];
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
                {items.map((itemId) => (
                <AnimeSortableItem key={itemId} id={itemId} />
                ))}
            </div>
        </SortableContext>
    </div>
  );
};