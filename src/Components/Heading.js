import React from 'react'

const Heading = (props) => {
  return (
    <div>
        <h3>{props.title}</h3>
        <h6>{props.subTitle}</h6>
    </div>
  )
}

export default Heading