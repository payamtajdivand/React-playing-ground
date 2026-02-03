function UserGreeting({ isLoggedIn = false, username = "guest" }) {
  const loginPrompt = (
    <h2 className="login-prompt">Please log in to continue</h2>
  );
  const welcomeMessage = (
    <h2 className="welcome-message">Welcome {username}</h2>
  );
  return isLoggedIn ? welcomeMessage : loginPrompt;
}

UserGreeting.defaultProps = {
  isLoggedIn: false,
  username: "Guest",
};

export default UserGreeting;
