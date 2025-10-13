// App.tsx
"use client"
import React, { useCallback, useEffect, useState } from 'react';
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

import type { AnimeItemResponse, Items } from './types';
import { AnimeListContainer } from './components/animeListContainer/animeListContainer';
import { AnimeTierContainer } from './components/animeTierContainer/animeTierContainer';
import { AnimeService } from '@/app/service/animeService';
import { AnimeItem } from './components/animeItem/animeItem';
import { TierTemplateService } from '@/app/service/tierTemplateService';
import { GetTierTemplatePaginatedResponse, GetTierTemplateResponse } from '@/app/service/dtos/tierTemplate';

const wrapperStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
};

const tierList = [
    {
        name:"S",
        color:"#FF807D",
    },
    {
        name:"A",
        color:"#FFE080",
    },
    {
        name:"B",
        color:"#FEFE7F",
    },
    {
        name:"C",
        color:"#BDFF7E",
    },
    {
        name:"ยังไม่เคยดู",
        color:"#7EFF80",
    }
]
type DragAndDropContainerProps = {
  tierTemplateId: string
}

export default function DragAndDropContainer(props:DragAndDropContainerProps) {
  const tierTemplateId = props.tierTemplateId
  const [items, setItems] = useState<Items>({
    S: [],
    A: [],
    B: [],
    C: [],
    ยังไม่เคยดู: [],
    group6: [],
  });
  const [activeId, setActiveId] = useState<AnimeItemResponse | null>(null);

  const animeService = new AnimeService()
  const tierTemplateService = new TierTemplateService()

  const [animeShow,setAnimeShow] = useState<AnimeItemResponse[]>()
  const [tierTemplate,setTierTemplate] = useState<GetTierTemplateResponse>()
  const [loading, setLoading] = useState(true);

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
    return Object.keys(items).find((key) => items[key].map(anime=>anime.id).includes(id));
  };

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    const activeItem = animeShow?.find((item) =>item.id == active.id.toString());
    if(activeItem != null){
      setActiveId(activeItem);
    }
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
      const activeIndex = activeItems.findIndex((item) => item.id === activeId);
      const overIndex = overItems.findIndex((item) => item.id === overId);

      const draggedItem = prev[activeContainer][activeIndex];

      if (!draggedItem) {
        return prev;
      }

      let newIndex: number;
      if (overId in prev) {
        newIndex = overItems.length;
      } else {
        const isBelowLastItem =
          over &&
          overIndex === overItems.length - 1 &&
          active.rect.current.translated &&
          over.rect &&
          active.rect.current.translated.top > over.rect.top + over.rect.height;

        const modifier = isBelowLastItem ? 1 : 0;
        newIndex = overIndex >= 0 ? overIndex + modifier : overItems.length;
      }

      return {
        ...prev,
        [activeContainer]: prev[activeContainer].filter(
          (item) => item.id !== activeId
        ),
        [overContainer]: [
          ...prev[overContainer].slice(0, newIndex),
          draggedItem,
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

    const activeIndex = items[activeContainer].findIndex(item=>item.id === activeId);
    const overIndex = items[overContainer].findIndex(item=>item.id === overId);

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

  const fetchAnime = useCallback(() => {
      //setLoading(true);
      const animeResponse = animeService.getAnimesByCategoryUniverse('0199de4d-dbd9-797a-b8e8-ce0dcc7e1106')
      animeResponse.then((res)=>{
          setAnimeShow(res.anime_list);
          setItems(prev =>{
            return {
              ...prev,
              group6:res.anime_list
              };
          })
      }).catch((error)=>{
          console.log('Failed to fetch anime:', error);
      }).finally(()=>setLoading(false))
  }, []);

  const fetchTierTemplateData = (id:string) => {
    const tierTemplateResponse = tierTemplateService.getByIdTierTemplate(id)
    tierTemplateResponse.then((res)=>{
      setTierTemplate(res)
    }).catch((error)=>{
          console.log('Failed to fetch tier template:', error);
      })
  }

  useEffect(() => {
      setLoading(true)
      fetchAnime()
      fetchTierTemplateData(tierTemplateId)
  },[]);
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
            <h1 className="text-3xl pl-10 p-5">{tierTemplate?.name}</h1>
            <div className='flex flex-col'>
              {tierList.map((tier) => {
                if(tier.name != "group6") {
                  return <AnimeTierContainer id={tier.name} key={tier.name} items={items[tier.name]} color={tier.color}/>
                }
              }
              )}
            </div>
          </div>
          <div className='w-1/3 h-screen'>
            <div className='pt-16 w-full'>
              <AnimeListContainer id={"group6"} key={"group6"} items={items.group6}/>
            </div>
          </div>
        </div>
        <DragOverlay>{activeId ? <AnimeItem anime={activeId} /> : null}</DragOverlay>
      </DndContext>
    </div>
  );
};