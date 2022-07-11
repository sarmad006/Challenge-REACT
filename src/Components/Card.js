import React, { useState } from 'react'
import Button from './Button';
import Heading from './Heading';
import { InputComponent } from './InputComponent'

const Card = (props) => {

const style={
    card:{
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
        border:`1px solid ${props.bgColor}`,
        borderRadius:"6%",
        margin:"auto",
        justifyContent:"center",
        alignItems:"center",
        width:"400px",
        marginTop:"3rem"
    }
}

    const  [name,SetName]=useState(null);
    const [errorName,setErrorName]=useState(false);
    const [email,SetEmail]=useState(null);
    const [Erroremail,SetErrorEmail]=useState(false);
    const [surname,SetSurname]=useState(null);
    const [Errorsurname,SetErrorSurname]=useState(false);
    const [ favoriteColor,setFavColor]=useState(null);
    const [ ErrorfavoriteColor,setErrorFavColor]=useState(false);
    const [age,SetAge]=useState(null);
    const [Errorage,SetErrorAge]=useState(false);
    const [gender,SetGender]=useState(null);
    const [disable,SetDisable]=useState(true);
    
    const handleSubmit=(e)=>{
    
    if(name  && surname && age && favoriteColor && email)
    {
    SetDisable(false);
    console.log("here");
    <Card bgColor="blue"/>
    }
    }
    const handleCancel=()=>{
      SetName(null);
      SetEmail(null);
      SetAge(null);
      SetSurname(null);
      SetGender(null);
      setFavColor(null);
    } 
    const CheckStrings=(value)=>{
     if(isNaN(value) || containsSpecialChars(value))
     return true
     else
     return false
    }  

    
    const handleName=(e)=>{
        
        setErrorName(false);    
        SetName(e.target.value);

       
         if(surname && !CheckStrings(surname))
         SetErrorSurname(true);
  
         if(favoriteColor && !CheckStrings(favoriteColor))
         setErrorFavColor(true);
         
         if(email &&  !email.includes('@'))
         SetErrorEmail(true);

         if(age && age<=0)
         SetErrorAge(true);
       
    }
    const handleSurname=(e)=>{
       
        SetErrorSurname(false);
        SetSurname(e.target.value);
       
         if(name && !CheckStrings(name))
         setErrorName(true);
  
         if(favoriteColor && !CheckStrings(favoriteColor))
         setErrorFavColor(true);
         
         if(email &&  !email.includes('@'))
         SetErrorEmail(true);

         if(age && age<=0)
         SetErrorAge(true);
       
    }

    const handleFavColor=(e)=>{
       
            setErrorFavColor(false);
        setFavColor(e.target.value);
       
         if(surname && !CheckStrings(surname))
         SetErrorSurname(true);
  
         if(name && !CheckStrings(name))
         setErrorName(true);
         
         if(email &&  !email.includes('@'))
         SetErrorEmail(true);

         if(age && age<=0)
         SetErrorAge(true);
        
    }

    const handleEmail=(e)=>{
        
            SetErrorEmail(false);
        SetEmail(e.target.value);
       
         if(surname && !CheckStrings(surname))
         SetErrorSurname(true);
  
         if(favoriteColor && !CheckStrings(favoriteColor))
         setErrorFavColor(true);
         
         if(name &&  !CheckStrings(name))
         setErrorName(true);

         if(age && age<=0)
         SetErrorAge(true);
        
    }

   const handleAge=(e)=>{
   
        SetErrorAge(false);
    SetAge(e.target.value)
   
     if(surname && !CheckStrings(surname))
     SetErrorSurname(true);

     if(favoriteColor && !CheckStrings(favoriteColor))
     setErrorFavColor(true);
     
     if(email &&  !email.includes('@'))
     SetErrorEmail(true);

     if(name && !CheckStrings(name))
     setErrorName(true);
    
   }


    function containsSpecialChars(str) {
        const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        return specialChars.test(str);
      }
  return (
    <div style={style.card}>
        <Heading title="FORM SUBMISSION" subTitle="FORM"/>
        <form >
            <InputComponent id="name" type="name" label="Name" placeholder="Enter your name" value={name} error={errorName} SetValue={handleName}/>
            <InputComponent id="email" type="email" label="Email" placeholder="Enter your Email" value={email} error={Erroremail} SetValue={handleEmail}/>
            <InputComponent id="surname" type="name" label="Surname" placeholder="Enter your surname" value={surname} error={Errorsurname} SetValue={handleSurname}/>
            <InputComponent id="age" label="Age" type="number" placeholder="Enter your age" value={age} SetValue={handleAge} error={Errorage} />
            <InputComponent id="favColor" label="Favorite Color" type="text" placeholder="Enter your favorite Color" error={ErrorfavoriteColor} value={favoriteColor} SetValue={handleFavColor}/>
            <InputComponent id="gender" label="Gender" type="radio" placeholder="Enter your Gender" value={gender} SetValue={SetGender}/>        
            <InputComponent id="noti" label="Enable Notification" type="checkbox" placeholder="enable Notification"/>
            <Button type="submit" label="Submit" handleClick={(e)=>handleSubmit(e)} padding="6px" color="white" bgColor="blue" disable={disable}/>
            <Button type="reset" label="cancel" handleClick={handleCancel} padding="6px" color="yellow" bgColor="green" disable={disable}/>
        </form>
    </div>

  )
}

export default Card