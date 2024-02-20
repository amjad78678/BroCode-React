
import Card from "./Card";
import Button from "./Button";
import Student from "./Student";
import UserGreeting from "./UserGreeting";

function App() {
  
    return (
      <>
      
        <Card />
         <Button/>
         <Student name="Amjadali" age='nalaayiram' isStudent={true}  />
         <Student name='akash'/>

         <UserGreeting isLoggedIn={true} username='mohammed amjadali mk'/>
         <UserGreeting />
      </>
    );

  }

export default App
