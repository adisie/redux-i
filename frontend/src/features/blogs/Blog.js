import { AiFillEdit } from "react-icons/ai"
import { MdDelete } from "react-icons/md"
import {formatDistanceToNow} from 'date-fns'

import { useDispatch,useSelector } from "react-redux"
import { deleteBlog } from "./blogSlice"
import { getUser } from "../users/userSlice"


const Blog = ({blog}) => {
  const dispatch = useDispatch()
  const user = useSelector(getUser)
  return (
    <div className='blog'>
      <p>{blog.body}</p>
      <div className="controlers">
        <div className="author-date">
            <span>{blog.username ? blog.username : user.username}</span>
            <span>{formatDistanceToNow(new Date(blog.createdAt),{addSuffix: true})}</span>
        </div>
        <div className="btns">
            {
              user._id === blog.author ?
              <>
              <button><AiFillEdit /></button>
              <button onClick={()=>{
                dispatch(deleteBlog(blog._id))
              }}><MdDelete /></button>
              </>
              :
              <></>
            }
        </div>
      </div>
    </div>
  )
}

export default Blog
