import { useEffect } from "react"
import {useDispatch} from 'react-redux'
import { getAllBlogs } from "./blogSlice"

// pages
import BlogList from "./BlogList"
import NewBlog from "./NewBlog"

const Blogs = () => {
  const dispatch = useDispatch()

  // get all blogs
  useEffect(()=>{
    dispatch(getAllBlogs())
  },[])
  return (
    <div className="sub-con blogs">
      <BlogList />
      <NewBlog />
    </div>
  )
}

export default Blogs
