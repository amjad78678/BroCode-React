
import profilePic from './assets/profile.png';

function Card(){

     return ( 
       <div className="card">
         <img    
           className='card-image' src={profilePic}
           alt="Profile picture"   
         />
         <h2 className='card-title'>Amjadali</h2>  
         <p className='card-text'>I am a full stack developer</p>
       </div>
     );
}

export default Card;