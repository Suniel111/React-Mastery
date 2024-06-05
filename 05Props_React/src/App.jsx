import "./App.css";
import Students from "./Components/Students";

function App() {
  return (
    <>
      <Students name="Suniel" age={21} />
      <Students name="Aniel" age={31} />
      <h1 className=" text-3xl font-extrabold text-center w-full p-4 bg-slate-300">
        App
      </h1>
    </>
  );
}

export default App;
