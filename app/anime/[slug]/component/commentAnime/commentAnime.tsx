"use client"

import { useUser } from "@/app/context/userContext";
import { CommentService } from "@/app/service/commentService";
import { CreateCommentAnimeRequest, GetCommentAnimeResponse } from "@/app/service/dtos/commentAnime";
import { comment } from "postcss";
import { useEffect, useState } from "react"

type CommentAnimeProps = {
    animeId: string
}

type FormData = {
    animeId: string
    message: string
}

export default function CommentAnime({animeId}:CommentAnimeProps) {
    const { user, loading } = useUser();
    const [isLoadingComment,setIsLoadingComment] = useState(false)
    const [formData, setFormData] = useState<FormData>({
        animeId:animeId,
        message:""
    })
    const [commentAnime, setCommentAnime] = useState<GetCommentAnimeResponse>()
    const commentService = new CommentService();

    const fetchCommentAnime =()=> {
        const commentAnimeResponse = commentService.getCommentAnime(animeId)
        commentAnimeResponse
            .then((res)=>setCommentAnime(res))
            .finally(()=>setIsLoadingComment(false))
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement> | any) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = () =>{
        const request: CreateCommentAnimeRequest ={
            anime_id:formData.animeId,
            message:formData.message
        }
        const createCommentAnimeResponse = commentService.createCommentAnime(request)
        createCommentAnimeResponse.then((response) => {
            console.log("Comment Success.")
        }).catch((error)=>console.log(error.response.data.message))
        .finally(()=>{
            handleClear()
            fetchCommentAnime()
        })
    }

    const handleClear = () => {
        setFormData({ ...formData, "message": "" });
    }

    useEffect(()=>{
        setIsLoadingComment(true)
        fetchCommentAnime()
    },[])

    if(isLoadingComment&&loading){
        return (<div>Loading Comment ...</div>)
    }

    return (        
        <div>
          <h1>ความคิดเห็น {commentAnime?.pagination.total_items} รายการ</h1>
          <div className="flex pt-5">
            <button className="px-5 py-2 bg-white rounded-2xl mr-3 text-black">Comment</button>
            <button className="px-5 py-2 bg-gray-600 rounded-2xl">Spoiler</button>
          </div>
          <div className="flex pt-5 flex-col">
            {user?<div className="p-5 bg-[#121212] mb-3">
                <div className="flex">
                    <img className="w-12 h-12 rounded-full object-cover" src={user?.profile_image}/>
                    <div className="w-full pl-4">
                        <input 
                            placeholder="เพิ่มความคิดเห็น..." 
                            className="w-full h-10 bg-none bg-[#121212] border-b-2 border-gray-800"
                            name="message"
                            value={formData?.message}
                            onChange={handleInputChange}/>
                    </div>
                </div>
                <div className="flex justify-end pt-2">
                    <button 
                        className="px-3 py-2 text-sm rounded-xl hover:bg-gray-600"
                        onClick={()=>handleClear()}>ยกเลิก</button>
                    <button 
                        className="ml-5 px-3 py-2 bg-gray-600 rounded-xl text-sm hover:bg-gray-700"
                        onClick={()=>handleSubmit()}>ส่งความคิดเห็น</button>
                </div>
            </div>:<></>}
            {commentAnime?.data.map((item)=>(
              <div className="flex p-5 bg-[#121212] mb-3" key={item.id}>
                <img
                  className="w-12 h-12 rounded-full object-cover" 
                  src={item.author_image}/>
                <div className="pl-4">
                  <div className="flex">
                    <h1 className="font-semibold">{item.author_name}</h1>
                    <span className="pl-3 text-gray-700">{item.created_at}</span>
                  </div>
                  <h2 className="pt-1">{item.message}</h2>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
    )
}