
 import { useState } from 'react';

 const ArrayState = () => {
   
 const [foods,setFoods]=useState(['Apple','Orange','Banana'])



 function handleAddFood(){

    const food=document.getElementById('inputFood').value
    document.getElementById('inputFood').value='';  

    setFoods((f)=> [...f,food] )
         
     
 }

 function handleRemoveFood(index){

     
    setFoods(foods.filter((food, i) => i !== index)); 
      
 }

 return (

    <div>
        <h2>List Of Food</h2>

        <ul>
            {foods.map((food,index)=> {

                return <li onClick={()=>handleRemoveFood(index)} key={index}>{food}</li>; 
            
            })}
        </ul>


        <input type="text" id='inputFood' onChange={(event)=>{
            setSearchText(event.target.value)
        }} placeholder='Enter food name...' />

        <input type="button" value={'submit'} onClick={handleAddFood} />
    </div>

 )





 };

 export default ArrayState;
