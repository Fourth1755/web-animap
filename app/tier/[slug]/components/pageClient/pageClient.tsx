"use client";
import dynamic from "next/dynamic";

const DragAndDropContainer = dynamic(
    () => import("../dragAndDropContainer/dragAndDropContainer"),
    { ssr: false } // ❌ ปิดการ SSR
);

type PageClinetProps = {
    id: string
}

export default function PageClient(props:PageClinetProps) {
    
    return (
        <div>
            <DragAndDropContainer tierTemplateId={props.id}/>
        </div>);
}