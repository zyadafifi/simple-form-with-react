import { useState } from "react";
import "./App.css";
function App() {
  const [isLogedIn, setIsLogedIn] = useState(false);
  let element;
  if (isLogedIn) {
    element =  <h1>You are logged in</h1>;
  } else {
    element = <h1>You are not logged in until now</h1>;
  }
  return (
    <>
      <div className="App">
        <input type="email" placeholder="enter your email please" /> <br />{" "}
        <br />
        <input type="password" placeholder="enter password" /> <br /> <br />
        <input type="" placeholder="enter your phone number " /> <br /> <br />
        <textarea
          name="message"
          rows="5"
          placeholder="Leave a message please"
        ></textarea>
        <br /> <br />
        <br /> <br /> <button onClick={() => setIsLogedIn(true)}>Log In</button>
        {element}
      </div>
    </>
  );
}
export default App;
