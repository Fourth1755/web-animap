// Container.tsx
import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import { SortableContext, rectSortingStrategy } from '@dnd-kit/sortable';
import { AnimeSortableItem } from '../animeSortableItem/animeSortableItem';



interface ContainerProps {
  id: string;
  items: string[];
}

export const AnimeListContainer = ({ id, items }: ContainerProps) => {
  const { setNodeRef } = useDroppable({ id });

  return (
    <div className='h-full'>
    <SortableContext id={id} items={items} strategy={rectSortingStrategy}>
    <div ref={setNodeRef} className="grid grid-cols-4 gap-2 m-2 p-3 rounded-md bg-black h-fit">
        {items.map((itemId) => (
        <AnimeSortableItem key={itemId} id={itemId} />
        ))}
    </div>
    </SortableContext>
    </div>

  );
};