import { useState } from "react"
import { GrSend } from "react-icons/gr"
import {useDispatch} from 'react-redux'
import { addNewBlog } from "./blogSlice"

const NewBlog = () => {
  const dispatch = useDispatch()

  // state
  const [body,setBody] = useState('')

  // adjust text area height
  const adjustTextAreaHeight = e => {
    e.target.style.height = "30px"
    e.target.style.height = `${e.target.scrollHeight}px`
  }

  // input change
  const inputChange = e => {
    setBody(e.target.value)
  }

  // submit handler
  const submitHandler = e => {
    e.preventDefault()
    if(body){
      dispatch(addNewBlog({body}))
      setBody('')
      e.target.body.style.height = "30px"
    }

  }
  
  return (
    <div className="form-contaner">
      <form onSubmit={submitHandler}>
        <textarea name="body" 
          onKeyUp={adjustTextAreaHeight} 
          value={body} 
          onChange={inputChange}></textarea>
        <button><GrSend /></button>
      </form>
    </div>
  )
}

export default NewBlog
