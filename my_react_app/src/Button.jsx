function Button(){

   let count=0
   const handleClick=(name)=> {

      count++
      if(count<=3){
         console.log(`Hey ${name} you clicked me ${count} times`)
      }else{

         console.log(`Hey ${name} why you clicking stop click rascal`)
      }
   }


   return(
   <button onClick={()=>handleClick('amjadali ')} className="button">Click me</button>

   )

}

export default Button;