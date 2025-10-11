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

export const AnimeListContainer = ({ id, items }: ContainerProps) => {
  const { setNodeRef } = useDroppable({ id });

  return (
    <div className='h-full'>
    <SortableContext id={id} items={items} strategy={rectSortingStrategy}>
    <div ref={setNodeRef} className="grid grid-cols-4 gap-2 m-2 p-3 rounded-md bg-black h-fit">
        {items.map((item) => (
        <AnimeSortableItem key={item.id} id={item.id} />
        ))}
    </div>
    </SortableContext>
    </div>

  );
};