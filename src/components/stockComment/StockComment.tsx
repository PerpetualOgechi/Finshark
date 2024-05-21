import React from 'react'
import StockCommentForm from './stockCommentForm/StockCommentForm'
import { commentPostApi } from '../../services/CommentService'
import { toast } from 'react-toastify'

type Props = {
  stockSymbol: string
}

type CommentFormInputs = {
  title: string;
  content: string;
  
}

const StockComment = ({stockSymbol}: Props) => {
  const handleComment = (e: CommentFormInputs) => {
    commentPostApi(e.title, e.content, stockSymbol)
    .then((res) => {
      if(res) {
        toast.success("Comment Created Successfully!")
        console.log("Commet Created Successfully")
      }else{
        console.log("Comment not created")
      }
    }).catch((e) => {
      toast.warning(e)
      console.log("There was an Error")
    })
  }
  return (
    <StockCommentForm symbol={stockSymbol} handleComment={handleComment} />
  )
}

export default StockComment