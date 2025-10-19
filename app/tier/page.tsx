import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../components/button/button";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { color } from "framer-motion";
import Link from "next/link";
import { TierTemplateService } from "../service/tierTemplateService";
import { redirect } from "next/navigation";

type TierTemplate = {
    id: string
    name: string
    created_by: string
    is_play: boolean
    played_count: number
    total_item: number
}

export default async function  Page() {
    const tierTemplateService = new TierTemplateService()
    const tierTemplateList = await tierTemplateService.getTierTemplate()

    return (
    <div className="container w-3/4 mx-auto pt-24">
        <div className="flex justify-between items-center">
            <div>
                <h1 className="font-bold text-3xl">Tier Template</h1>
            </div>
            <div>
                <Button name={"Create Template"} color={"white"}/>
            </div>
        </div>
        <div className="relative overflow-x-auto pt-8">
            <table className="w-full text-lg text-left rtl:text-right text-gray-500 bg-black rounded-2xl p-1">
                <thead className="text-lg dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-4 py-3">
                            #
                        </th>
                        <th scope="col" className="pr-6 py-3">
                            Tier
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Plays
                        </th>
                        <th scope="col" className="py-3">
                        </th>
                        <th scope="col" className="pr-6 py-3">
                            Item
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {tierTemplateList.data.map((item,index)=>(
                            <tr 
                                key = {index}
                                className="border-gray-200 hover:bg-gray-900"
                                >
                                <td className="px-4 py-4">
                                    {index+1}
                                </td>
                                <td className="pr-6 py-4">
                                    <h1 className="font-medium text-white">
                                        <Link href={`/tier/${item.id}`}>{item.name}</Link>
                                    </h1>
                                    <h2>{item.created_by}</h2>
                                </td>
                                <td className="px-6 py-4">
                                    {item.played_count}
                                </td>
                                <td className="py-4">
                                    {item.is_play?                                
                                    <div className="w-7 h-7 rounded-full bg-[#FF1493] flex items-center justify-center" >
                                        <FontAwesomeIcon icon={faCheck} size="sm" style={{color:`#FFFFFF`}}/>
                                    </div>:<></>}
                                </td>
                                <td className="pr-6 py-4">
                                    {item.total_item}
                                </td>
                            </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>);
}