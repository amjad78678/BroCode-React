function Button(){

   
   const handleClick=(e)=>e.target.textContent='OUCH!'


   return(
   <button onDoubleClick={(event)=>handleClick(event)}  className="button">Click me</button>

   )

}

export default Button;