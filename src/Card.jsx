import profilePic from "./assets/profilePic.jpeg";

function Card() {
  return (
    <div className="card">
      <img className="card-image" src={profilePic} alt="profile picture"></img>
      <h2 className="card-title">Mr Nose</h2>
      <p className="card-text">I do coding stuff and Im good at it</p>
    </div>
  );
}

export default Card;
