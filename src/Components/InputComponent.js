import React from 'react'


export const InputComponent = (props) => {

  
    const style={
         input : {
                padding: "3px",
                boxShadow: "3px 3px 5px grey",
                fontSize: "14px",
                fontWeight: 600,
                width: "300px"
              },
              label:{
                color: "#B4886B",
                fontWeight: "bold",
                display: "block",
                margin:"6px"
              },
        
    }
  return (
 <>
 {props.label==='Gender'?
 (
 <div>
    <label style={style.label} htmlFor = {props.id}>{props.label}</label>
    <label >Male</label>
    <input type={props.type} id={props.id} placeholder={props.placeholder} value={props.value} onChange={(e)=>props.SetValue(e.target.value)}></input>
    <label >Female</label>
    <input type={props.type} id={props.id} placeholder={props.placeholder} value={props.value} onChange={(e)=>props.SetValue(e.target.value)}></input>
 </div>
 ) :
  (
    
    
    
   <div>
   
   <label style={style.label}  htmlFor = {props.id}>{props.label}</label>
   <input style={style.input} type={props.type} id={props.id} placeholder={props.placeholder} value={props.value} onChange={(e)=>props.SetValue(e)}/>
  
  
   
     {props.error===true ? (
       <div>
        <label style={{color:"red"}}>Incorrect Input</label>
        </div>
      ) :''
    } 
    </div>
  )
   
}
</>
  )
}
      

  

