function Button() {

    const handleClick = (e) => e.target.textContent = "Do not click me!"

    return(<button onClick={(e) => handleClick(e)}>Click me!</button>);
}

export default Button 