
import {useSelector,useDispatch} from 'react-redux'
import { getBlogs,getIsLoading,getError,reset } from './blogSlice'

// pages
import Blog from "./Blog"
import Spiner from '../../pages/Spiner'

const BlogList = () => {
  const dispatch = useDispatch()
  const blogs = useSelector(getBlogs)
  const isLoading = useSelector(getIsLoading)
  const error = useSelector(getError)
  
  if(isLoading){
    return <Spiner />
  }

  if(error){
    localStorage.removeItem('user')
    window.location.assign('/login')
    dispatch(reset())
  }

  return (
    <div className="blog-list">
      {
        blogs.length 
        ?
        blogs.map(blog=>{
          return (
            <Blog key={blog._id} blog={blog} />
          )
        })
        :
        <div></div>
      }
    </div>
  )
}

export default BlogList
