import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const Add = () => {
    setCount(count + 1);
  };

  const Subtract = () => {
    setCount(count - 1);
  };

  return (
    <>
      <Header />
      <div className="w-full items-center flex flex-col ">
        <h1 className=" text-6xl font-extrabold">{count}</h1>
        <div className="flex">
          <button
            onClick={Add}
            className="p-2 font-bold bg-pink-600 text-white w-20 m-5"
          >
            Add
          </button>
          <button
            onClick={Subtract}
            className="p-2 font-bold bg-pink-600 text-white w-20 m-5"
          >
            Subtract
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
