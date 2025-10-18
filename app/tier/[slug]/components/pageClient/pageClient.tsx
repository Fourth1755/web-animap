"use client";
import { GetTierTemplateByIdResponse } from "@/app/service/dtos/tierTemplate";
import dynamic from "next/dynamic";

const DragAndDropContainer = dynamic(
    () => import("../dragAndDropContainer/dragAndDropContainer"),
    { ssr: false } // ❌ ปิดการ SSR
);

type PageClinetProps = {
    id: string
    getTierTemplateByIdResponse: GetTierTemplateByIdResponse
}

export default function PageClient(props:PageClinetProps) {
    
    return (

            <DragAndDropContainer tierTemplateId={props.id} getTierTemplateByIdResponse={props.getTierTemplateByIdResponse}/>
);
}