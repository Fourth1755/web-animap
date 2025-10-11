"use client";
import dynamic from "next/dynamic";

const DragAndDropContainer = dynamic(
  () => import("./components/dragAndDropContainer/dragAndDropContainer"),
  { ssr: false } // ❌ ปิดการ SSR
);

export default function Page() {
  return (<div>
    <DragAndDropContainer />
    </div>);
}