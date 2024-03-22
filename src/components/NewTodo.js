import React from 'react'

 const NewTodo = (props) =>{
    props.onhandelNewData({title: "I am props new todoo"});
  return (
    <div>NewTodo</div>
  )
}

export default NewTodo