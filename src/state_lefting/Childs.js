import React from 'react'

export default function Childs(props) {
    const data = "I am from Child Nowww";

    props.onChildData(data);
  return (
    <div>
        <p>I am child</p>
        <p>{props.data}</p>
    </div>
  )
}
