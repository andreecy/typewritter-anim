import { useEffect, useState } from "react";
import "./App.css";

const words =
  "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco";

function App() {
  const [displayedChar, setDisplayedChar] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (displayedChar >= words.length - 1) {
        return;
      }
      setDisplayedChar(displayedChar + 1);
    }, 150);

    return () => clearInterval(interval);
  }, [displayedChar]);

  return (
    <div className="container">
      <p className="text">
        <span>{words.slice(0, displayedChar + 1)}</span>
        <span className="cursor"></span>
      </p>
    </div>
  );
}

export default App;
