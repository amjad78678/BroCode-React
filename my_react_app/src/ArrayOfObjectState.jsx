
import { useState } from "react";


const ArrayOfObjectState=()=>{


    const [cars,setCars]=useState([])
    const [carYear,setCarYear]=useState(new Date().getFullYear())
    const [carMake,setCarMake]=useState('')
    const [carModel,setCarModel]=useState('')


    function handleAddCar(){

        const newCar={
            year:carYear,
            make:carMake,
            model:carModel
        }


    setCars([...cars, newCar]);


    setCarYear(new Date().getFullYear());
    setCarMake('');
    setCarModel('');

    // setCars((c)=> [...c,newCar])

    }

    function handleRemoveCar(index){

       setCars(cars.filter((car, i) => i !== index));

    }

    function handleYearChange(event){

        setCarYear(event.target.value)
    }
    function handleMakeChange(event){

        setCarMake(event.target.value)

    }
    function handleModelChange(event){

        setCarModel(event.target.value)
    }


    return (
        <div>

<h2>List of car objects</h2>

<ul>
   
  {cars.map((car,index)=>{
    return <li key={index} onClick={()=>handleRemoveCar(index)}>{car.year} {car.model} {car.make}</li> 
  })}
</ul>

<input type="number" value={carYear} onChange={handleYearChange} /><br />

<input type="text" placeholder="Enter car make" value={carMake} onChange={handleMakeChange} /><br />

<input type="text" placeholder="Enter model make" value={carModel} onChange={handleModelChange} /><br />


  <button onClick={handleAddCar}>Add Car</button>
</div>
 )
   

}

export default ArrayOfObjectState;