"use client";
import { useEffect, useState } from "react";
import "./mediaBlock.scss";
import { motion, AnimatePresence } from "framer-motion";
import { GetAnimePictureResponse } from "@/app/service/dtos/anime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay} from "@fortawesome/free-solid-svg-icons";

type GetAnimePictureDataResponse = {
    id:string
    type: string
    url: string
    embed_url: string
}

type MediaBlockProps = {
    anime_media: GetAnimePictureDataResponse[]
}

type MediaSelect = {
    id: string
    url: string
    type: string
    embed_url: string
}

export default function MediaBlock(props:MediaBlockProps) {
    const { anime_media } = props
    // const [mediaSelect,setMediaSelect] = useState<MediaSelect>({
    //     id:"",
    //     url:trailer_embed,
    //     type:"VIDEO"
    // })
    const [activeIndex, setActiveIndex] = useState(0);
    const [listofMedia,setListofMedia] =useState<MediaSelect[]>([])
    const [startLoop, setStartLoop] = useState(false)

    const initData =()=>{
        let listofMediaData:MediaSelect[] = []
        // listofMediaData.push({
        //     id:"",
        //     url:trailer_embed,
        //     type:"VIDEO"
        // })
        anime_media.map((item)=>listofMediaData.push({
            id:item.id,
            url:item.url,
            type:item.type,
            embed_url:item.embed_url
        }))
        setListofMedia(listofMediaData)
        console.log("Done")
    }

    const handleChangeMeia =(i:number)=>{
        setStartLoop(true)
        setActiveIndex(i)
    }
    useEffect(()=>{
        initData()
        console.log(listofMedia[0])
    },[])

    useEffect(() => {
        if(listofMedia[activeIndex]?.type!="VIDEO" && startLoop){
            const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % listofMedia.length);
            }, 3000);
            return () => clearInterval(interval);
        }
    }, [activeIndex]);

    // if (trailer_embed == ""|| trailer_embed == null){
    //     return <div></div>
    // }
    
    return (
              <div>
                <div className="trailer-iframe">
                    {listofMedia[activeIndex]?.type=="VIDEO"?<iframe
                        className="w-full h-full"
                        id="player"
                        src={`${listofMedia[activeIndex]?.embed_url}`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    ></iframe>:
                    <div>
                        {/* <img
                            className="w-full h-full bg-cover bg-center bg-black"
                            src={`${mediaSelect.url}`}
                        /> */}
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={listofMedia[activeIndex]?.id}
                                src={listofMedia[activeIndex]?.url}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0.5 }}
                                transition={{ duration: 0.3 }}
                                className="w-full h-full object-cover"
                            />
                        </AnimatePresence>
                    </div>}
                </div>
                    <div className="trailer-slider">
                        {listofMedia.map((item,i)=>(
                            <div key={i}>
                                    {item.type=="VIDEO"?
                                    <div className="relative inline-block">
                                    <div
                                        className="w-[133px] h-[77px] bg-cover bg-center bg-no-repeat"
                                        style={{backgroundImage:`url(${item?.url})`}}
                                        onClick={() => handleChangeMeia(i)}>
                                            <FontAwesomeIcon icon={faCirclePlay} className="circlePlay"/>
                                    </div>   
                                     </div>
                                    :<div 
                                        className="w-[133px] h-[77px] bg-cover bg-cente bg-no-repeat"
                                        style={{backgroundImage:`url(${item?.url})`}}
                                        onClick={() => handleChangeMeia(i)}>
                                    </div> 
                                        }
                            </div>)
                        )}
                    </div>
              </div>
    )
}