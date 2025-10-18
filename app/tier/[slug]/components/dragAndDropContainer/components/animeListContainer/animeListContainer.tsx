// Container.tsx
import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import { SortableContext, rectSortingStrategy } from '@dnd-kit/sortable';
import { AnimeSortableItem } from '../animeSortableItem/animeSortableItem';
import { AnimeItemResponse } from '../../types';

interface ContainerProps {
  id: string;
  items: AnimeItemResponse[];
}

export const AnimeListContainer = ({ id, items }: ContainerProps) => {
  const { setNodeRef } = useDroppable({ id });

  return (
    <div>
    <SortableContext id={id} items={items} strategy={rectSortingStrategy}>
    <div ref={setNodeRef} className="grid xl:grid-cols-4 sm:grid-cols-3 grid-cols-3 gap-1 m-2 p-3 rounded-md bg-gray-800 xl:h-full lg:h-72 h-96 overflow-y-auto">
        {items.map((item) => (
        <AnimeSortableItem key={item.id} id={item.id} anime={item} />
        ))}
    </div>
    </SortableContext>
    </div>

  );
};