import { useState, useEffect } from "react";
import Card from "./Components/Card";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    async function getData() {
      const get = await fetch("https://freetestapi.com/api/v1/actors");
      const res = await get.json();

      setData(res);
      // console.log(data[1]);
    }
    getData();
  }, []);

  return (
    <>
      <h1 className="text-3xl text-center font-extrabold shadow-2xl p-4">
        useEffect Hook
      </h1>
      {
        <div className="flex flex-wrap m-10">
          {data?.map((element) => {
            return (
              <Card
                title={element.name}
                year={element.birth_year}
                img={element.image}
                nationality={element.nationality}
                known={element.known_for}
              />
            );
          })}
        </div>
      }
    </>
  );
}

export default App;
