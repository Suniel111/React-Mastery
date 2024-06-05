import { useState } from "react";
import Header from "./Components/Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  const Add = () => {
    setData([...data, { name, email }]);
    setName("");
    setEmail("");
  };

  const remove = (index) => {
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  };
  return (
    <>
      <Header />

      <div className="m-4">
        <Stack spacing={2} direction="row">
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="outlined-basic"
            label="Name"
            variant="outlined"
            className="m-4"
            required
          />
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            className="m-4"
            required
          />
          <Button onClick={Add} variant="contained">
            Add
          </Button>
        </Stack>
      </div>

      <div className=" w-1/3 flex justify-between m-8">
        <h2 className="text-xl font-extrabold">Name</h2>
        <h2 className="test-xl font-extrabold">Email</h2>
        <Button variant="outlined">Delete</Button>
      </div>

      {data.map((element, index) => {
        console.log(element, index);
        return (
          <div className=" w-1/3 flex justify-between m-8" key={index}>
            <h2 className="text-xl font-extrabold">{element.name}</h2>
            <h2 className="test-xl font-extrabold">{element.email}</h2>
            <Stack>
              <Button
                onClick={() => remove(index)}
                className="rem"
                variant="outlined"
              >
                <DeleteIcon />
              </Button>
            </Stack>
          </div>
        );
      })}
    </>
  );
}

export default App;
