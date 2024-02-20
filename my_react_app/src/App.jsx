
import Card from "./Card";
import Button from "./Button";
import Student from "./Student";

function App() {
  
    return (
      <>
      
        <Card />
         <Button/>
         <Student name="Amjadali" age='nalaayiram' isStudent={true}  />
         <Student name="Rithas" age={30} isStudent={true}  />
         <Student name="Arun" age={30} isStudent={false}  />
         <Student name="Afsal" age={30} isStudent={false}  />
         <Student name='akash'/>
      </>
    );

  }

export default App
