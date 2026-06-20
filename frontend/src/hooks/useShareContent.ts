import { useState, useEffect } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";

interface Content {
    _id: string
    type: string
    title: string
    link: string
    tags: string[]
    userId: string
}

export function useShareContent(shareLink: string) {
    const [username, setUsername] = useState("");
    const [content, setContent] = useState<Content[]>([]);

    async function getSharedContent() {
        try {
            const response = await axios.get(`${BACKEND_URL}/api/v1/brain/${shareLink}`);
            setUsername(response.data.username);
            setContent(response.data.content);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getSharedContent();
    }, [shareLink]);

    return { username, content };
}