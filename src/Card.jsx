import profilePic from "./assets/profilePic.jpeg";

function Card() {
  return (
    <div>
      <img src={profilePic} alt="profile picture"></img>
      <h2>Mr Nose</h2>
      <p>I do coding stuff and Im good at it</p>
    </div>
  );
}

export default Card;
