import { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((prev) => prev + 1);
  };
  const buttonText = `Count - ${count}`;
  return <button onClick={handleClick}>{buttonText}</button>;
}
