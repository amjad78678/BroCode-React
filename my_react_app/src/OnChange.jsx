import {useState} from 'react'

function OnChange(){

    const [text,setText]=useState()
    const [quantity,setQuantity]=useState()
    const [comment,setComment]=useState()

    const [payment,setPayment]=useState()

    const handleChangeText=(event)=>{

         setText(event.target.value)
    }    

    const handleChangeQuantity=(event)=>{

        setQuantity(event.target.value)
    }

    const handleComment=(event)=>{

        setComment( event.target.value )

    }
    
    const handleRadio=(event)=>{

           setPayment( event.target.value);
    }

    return (
      <>
        <input type="text" value={text} onChange={handleChangeText} />

        <h2>Name : {text}</h2>

        <input type="number" value={quantity} onChange={handleChangeQuantity} />

        <h2>Quantity : {quantity}</h2>

        <textarea
          value={comment}
          name=""
          id=""
          cols="30"
          rows="10"
          onChange={handleComment}
        ></textarea>

        <h2>Comment : {comment}</h2>

        <label htmlFor="">
          <input
            type="radio"
            value={'Razorpay'}
            checked={payment === 'Razorpay'}
            onChange={handleRadio}
          />
          Razorpay
        </label>

        <label htmlFor="">
          <input
            type="radio"
            value={'Cash On Delivery'}
            checked={payment === 'Cash On Delivery'}
            onChange={handleRadio}
          />
          Cash On Delivery
        </label>

        <h2>Payment : {payment}</h2>
      </>
    );
}


export default OnChange;