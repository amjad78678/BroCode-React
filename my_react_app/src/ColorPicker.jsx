import {useState} from 'react';

const ColorPicker=()=>{

const [color,setColor]=useState('#FFFFFF')

  const handleChangeColor=(event)=>{
    setColor(event.target.value)
  }


    return (
      <>
        <div className="color-picker-container">
          <h1>Color Picker</h1>

          <div className="color-display" style={{ backgroundColor: color }}>
            <p className='color-text'>Selected color : {color}</p> 
          </div>

          <label htmlFor="">Select a color : </label>

          <input type="color" value={color} onChange={handleChangeColor} />
        </div>
      </>
    );


}



export default ColorPicker;