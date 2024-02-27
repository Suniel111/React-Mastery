import { useState, useCallback, useRef, useEffect } from "react";

function App() {
  const [length, setlength] = useState(8);
  const [charAllowed, setCharAllowed] = useState(false);
  const [numberAllowd, setnumberAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowd) str += "0123456789";
    if (charAllowed) str += "@!#$%^&*_+-=:<>?:|/.,';";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, charAllowed, numberAllowd, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 20);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, charAllowed, numberAllowd, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className=" shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded items-center flex mb-1 outline-none bg-blue-600 text-white shrink-0"
          >
            COPY
          </button>
          <div className="flex text-sm gap-x-2 ">
            <div className="flex items-center gap-x-1">
              <input
                type="range"
                min={8}
                max={20}
                value={length}
                className="curser-pointer"
                onChange={(e) => {
                  setlength(e.target.value);
                }}
              />
              <label>Length: {length}</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={numberAllowd}
                id="numberInput"
                onChange={() => {
                  setnumberAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="numberInput">Number</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                id="characterInput"
                onChange={() => {
                  setCharAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="characterInput">Number</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
