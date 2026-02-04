function ProfileImage() {
  const clickHandler = (e) => (e.target.style.display = "none");
  const imageLocation = "./src/assets/profilePic.jpeg";
  return <img onClick={(e) => clickHandler(e)} src={imageLocation}></img>;
}

export default ProfileImage;
