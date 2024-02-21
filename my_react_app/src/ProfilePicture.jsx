function ProfilePicture(){

const imageUrl='./src/assets/profile.png';

const handleClick= (e)=> e.target.style.display='none';

return(

  <img onClick={(event)=>handleClick(event)} src={imageUrl} alt="Profile img" />

)


}

export default ProfilePicture;