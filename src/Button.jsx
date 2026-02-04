function Button() {
  const handleClick = (event) => (event.target.textContent = "Ouch 🤕");

  return (
    <button onDoubleClick={(event) => handleClick(event)}>click me 😍</button>
  );
}

export default Button;
