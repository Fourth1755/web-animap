// App.tsx
import React, { useState } from 'react';
import {
  DndContext,
  DragOverlay,
  rectIntersection,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragStartEvent,
  DragOverEvent,
  DragEndEvent,
} from '@dnd-kit/core';
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable';

import { Item } from './item';
import type { Items } from './types';
import { AnimeListContainer } from './components/animeListContainer/animeListContainer';
import { AnimeTierContainer } from './components/animeTierContainer/animeTierContainer';

const wrapperStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
};

export default function DragAndDropContainer() {
  const [items, setItems] = useState<Items>({
    group1: [],
    group2: [],
    group3: [],
    group4: [],
    group5: [],
    group6: ['1', '2', '3','4', '5', '6','7', '8', '9'],
  });

  const [activeId, setActiveId] = useState<string | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const findContainer = (id: string): string | undefined => {
    if (id in items) {
      return id;
    }
    return Object.keys(items).find((key) => items[key].includes(id));
  };

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    setActiveId(active.id.toString());
  };

  const handleDragOver = (event: DragOverEvent) => {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id.toString();
    const overId = over.id.toString();

    const activeContainer = findContainer(activeId);
    const overContainer = findContainer(overId);

    if (!activeContainer || !overContainer || activeContainer === overContainer) {
      return;
    }

    setItems((prev) => {
      const activeItems = prev[activeContainer];
      const overItems = prev[overContainer];
      const activeIndex = activeItems.indexOf(activeId);
      const overIndex = overItems.indexOf(overId);

      let newIndex: number;
      if (overId in prev) {
        newIndex = overItems.length + 1;
      } else {
        const isBelowLastItem =
          over &&
          overIndex === overItems.length - 1 &&
          active.rect.current.translated && // <--- Correct access
          over.rect &&
          active.rect.current.translated.top > over.rect.top + over.rect.height;

        const modifier = isBelowLastItem ? 1 : 0;
        newIndex = overIndex >= 0 ? overIndex + modifier : overItems.length;
      }

      return {
        ...prev,
        [activeContainer]: prev[activeContainer].filter(
          (item) => item !== activeId
        ),
        [overContainer]: [
          ...prev[overContainer].slice(0, newIndex),
          activeId,
          ...prev[overContainer].slice(newIndex),
        ],
      };
    });
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) {
      setActiveId(null);
      return;
    }

    const activeId = active.id.toString();
    const overId = over.id.toString();

    const activeContainer = findContainer(activeId);
    const overContainer = findContainer(overId);

    if (
      !activeContainer ||
      !overContainer ||
      activeContainer !== overContainer
    ) {
      setActiveId(null);
      return;
    }

    const activeIndex = items[activeContainer].indexOf(activeId);
    const overIndex = items[overContainer].indexOf(overId);

    if (activeIndex !== overIndex) {
      setItems((currentItems) => ({
        ...currentItems,
        [overContainer]: arrayMove(
          currentItems[overContainer],
          activeIndex,
          overIndex
        ),
      }));
    }

    setActiveId(null);
  };

  return (
    <div style={wrapperStyle}>
      <DndContext
        sensors={sensors}
        collisionDetection={rectIntersection}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
        <div className='flex w-screen'>
          <div className="pt-16 pl-8 w-full">
            <h1 className="text-3xl pl-10 p-5">anime ยอมนิยม (300+ anime)</h1>
            <div className='flex flex-col'>
              {Object.keys(items).map((key) => {
                if(key != "group6") {
                  return <AnimeTierContainer id={key} key={key} items={items[key]} />
                }
              }
              )}
            </div>
          </div>
          <div className='w-96 h-screen bg-gray-600'>
            <div className='pt-16 w-full'>
              
              <AnimeListContainer id={"group6"} key={"group6"} items={items.group6}/>
            </div>
          </div>
        </div>
        <DragOverlay>{activeId ? <Item id={activeId} /> : null}</DragOverlay>
      </DndContext>
    </div>
  );
};