import React from 'react'

const Button = (props) => {
    const style={
        button:{
            padding:props.padding,
            color:props.color,
            backgroundColor:props.bgColor,
            margin:"20px",
            border : `1px solid ${props.bgColor}`,
            borderRadius:"6%",
            cursor:"pointer",
            width:"130px"
        }
    }
  return (
    <>
    {props.type==='submit' && props.disable===true ?
(
    <button disabled style={style.button} type={props.type} onClick={(e)=>props.handleClick(e)}>{props.label}</button>
):
<button style={style.button} type={props.type} onClick={(e)=>props.handleClick(e)}>{props.label}</button>
}
  
    </>  
  )
}

export default Button