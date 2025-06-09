import "@styles/index.css";
import "@styles/test.css";

import image from "@assets/logo.png";
import reactIcon from "@assets/react.svg";

import Counter from "@/components/Counter";

function App() {
  return (
    <div className="home">
      <h1>Hello Welocme</h1>
      <Counter />
      <br />
      <img src={image} alt="paint" />
    </div>
  );
}

console.log(App());
export default App;
