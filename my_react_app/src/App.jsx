
import Card from "./Card";
import Button from "./Button";
import Student from "./Student";
import UserGreeting from "./UserGreeting";
import List from "./List";

function App() {
  
   const fruits = [
     { id: 1, name: 'apple', calories: 67 },
     { id: 2, name: 'orange', calories: 95 },
     { id: 3, name: 'banana', calories: 125 },
     { id: 4, name: 'pappaya', calories: 85 },
   ];


    return (
      <>
      
        <Card />
         <Button/>
         <Student name="Amjadali" age='nalaayiram' isStudent={true}  />
         <Student name='akash'/>

         <UserGreeting isLoggedIn={true} username='mohammed amjadali mk'/>
         <UserGreeting />


         <List items={fruits} category='fruits'/>
      </>
    );

  }

export default App
