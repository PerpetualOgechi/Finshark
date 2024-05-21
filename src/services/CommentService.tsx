import axios from "axios";
import { handleError } from "../helpers/ErrorHandler";
import { CommentPost } from "../models/CommentPost";

const api = "https://finshark.onrender.com/api/comment/";

export const commentPostApi = async (title: string, content: string, symbol: string) => {
    try {
        const data = await axios.post<CommentPost>(api + `${symbol}`, {
            title: title,
            content: content,
        })
        return data
    } catch (error) {
        handleError(error)
    }
}