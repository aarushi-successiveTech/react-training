/* Create a functional component named UserCard that accepts the following props: name, email, and avatarURL.
Use the props to display the user's name, email, and an image (avatar) in the UserCard component.
Create multiple instances of the UserCard component with different user data. */

import UserCard from "./UserCard"; 

const user = [
  {
    name : "Aarushi",
    email : "aarushi@gmail.com",
    avatar : "https://images.icon-icons.com/2643/PNG/512/female_woman_user_people_avatar_white_tone_icon_159354.png"
  },
  {
    name : "eklavya", 
    email : "eklavya@gmail.com",
    avatar : "https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png"
  },
  {
    name : "Vaishnavi", 
    email : "vaishnavi@gmail.com",
    avatar : "https://images.icon-icons.com/2643/PNG/512/female_woman_user_people_avatar_white_tone_icon_159354.png"
  }
];

const Userfunction =() =>{
  return(
    <div>
      {user.map((user, index) =>(
        <UserCard key = {index} name = {user.name} email = {user.email} avatar = {user.avatar}/>
      ))}
    </div>
  )
}
export default Userfunction; 