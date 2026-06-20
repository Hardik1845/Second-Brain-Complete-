import { useState, useEffect } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";

interface Content {
    _id: string
    type: "twitter"|"youtube"
    title: string
    link: string
    tags: string[]
    userId: string
}

export function useContent() {
    const [content, setContent] = useState<Content[]>([]);

    async function getContent() {
        const response = await axios.get(`${BACKEND_URL}/api/v1/content`, {
            headers: {
                authorization: localStorage.getItem("token")
            }
        });
        setContent(response.data.content);
    }

    useEffect(() => {
        getContent();
    }, []);

    return content;
}