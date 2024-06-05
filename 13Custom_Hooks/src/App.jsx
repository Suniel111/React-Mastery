import { useState } from "react";
import UseFetch from "./Components/UseFetch";
function App() {
  const [data] = UseFetch("https://freetestapi.com/api/v1/actors");
  return (
    <>
      <h1 className="text-3xl font-extrabold justify-center bg-blue-700 text-white p-2 w-full flex">
        Custom Hooks
      </h1>
      {data?.map((e) => {
        return <h1>{e.name}</h1>;
      })}
    </>
  );
}

export default App;
