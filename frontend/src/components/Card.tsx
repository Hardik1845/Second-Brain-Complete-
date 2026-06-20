import { DeleteIcon } from "../icons/DeleteIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { BACKEND_URL } from "../config";
import axios from "axios";

interface CardProps {
    title: string,
    link: string,
    type: "twitter" | "youtube"
}

export function Card(props: CardProps) {
    async function DeletePost(){

        const request = await axios.delete(`${BACKEND_URL}/api/v1/content`,{
            headers:{
                authorization:localStorage.getItem("token")
            }
        })
    }
    return (
        <div className="rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow w-full sm:w-72 lg:w-80 flex flex-col overflow-hidden">

            {/* Header row */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
                <div className="flex items-center gap-2 min-w-0">
                    <span className="text-gray-400 shrink-0">
                        <ShareIcon />
                    </span>
                    <span className="text-sm font-medium text-gray-800 truncate">
                        {props.title}
                    </span>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                    <a href={props.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 transition-colors">
                        <ShareIcon />
                    </a>
                    {/* 🔴 was duplicate ShareIcon — replace with delete/trash icon */}
                    <button className="text-gray-400 hover:text-red-500 transition-colors">
                        <DeleteIcon />
                    </button>
                </div>
            </div>

            {/* Embed */}
            <div className="p-3">
                {props.type === "youtube" && (
                    <iframe
                        className="w-full aspect-video rounded-md"
                        src={props.link.replace("watch", "embed").replace("?v=", "/")}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    />
                )}

                {props.type === "twitter" && (
                    <blockquote className="twitter-tweet">
                        <a href={props.link}></a>
                    </blockquote>
                )}
            </div>
        </div>
    )
}