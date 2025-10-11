// SortableItem.tsx
import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { AnimeItem } from '../animeItem/animeItem';

interface SortableItemProps {
  id: string;
}

export const AnimeSortableItem = ({ id }: SortableItemProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging, // Add this to handle style when dragging
  } = useSortable({ id });

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1, // Example: make item semi-transparent while dragging
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <AnimeItem id={id} />
    </div>
  );
};