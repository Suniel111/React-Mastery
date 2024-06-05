import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <h1 className=" text-3xl font-bold bg-gray-300 shadow-xl w-full text-blue-900 p-5 flex justify-center">
        useContext and Context API
      </h1>
      <div className="flex flex-col w-full justify-center h-full content-center">
        <Login />
        <Profile />
      </div>
    </UserContextProvider>
  );
}

export default App;
