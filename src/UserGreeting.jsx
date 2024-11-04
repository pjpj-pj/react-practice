

function UserGreeting(prop) {
    const welcomeGreeting = <h2 className="welcome-message">Welcome {prop.username}!</h2>
    const logginMessage = <h2 className="login-message">Please login to continue.</h2>

    return prop.isLoggedIn ? welcomeGreeting : logginMessage;
}

export default UserGreeting