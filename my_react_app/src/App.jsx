
import Card from "./Card";
import Button from "./Button";
import Student from "./Student";
import UserGreeting from "./UserGreeting";
import List from "./List";
import ProfilePicture from "./ProfilePicture";
import MyComponent  from "./MyComponent";
import Counter from "./Counter";
import OnChange from "./OnChange";


function App() {
  
   const fruits = [
     { id: 1, name: 'apple', calories: 67 },
     { id: 2, name: 'orange', calories: 95 },
     { id: 3, name: 'banana', calories: 125 },
     { id: 4, name: 'pappaya', calories: 85 },
   ];

   const vegetables = [
     { id: 1, name: 'carrot', calories: 41 },
     { id: 2, name: 'broccoli', calories: 55 },
     { id: 3, name: 'spinach', calories: 23 },
     { id: 4, name: 'cucumber', calories: 16 },
   ];



    return (
      <>
{/*       
         <ProfilePicture />
         <Student name="Amjadali" age={18} isStudent={true}  />
         <Student name='akash'/>

         <UserGreeting isLoggedIn={true} username='mohammed amjadali mk'/>
         <UserGreeting />


               
       {fruits.length>0? <List items={fruits} category='fruits'/>:null} 
       {vegetables.length>0 ?<List items={vegetables} category='vegetables'/>:null}  */}


        <OnChange />

      </>
    );

  }

export default App
