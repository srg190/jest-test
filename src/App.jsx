import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Cake from "./features/cake";
import IceCream from "./features/icecreams";
import User from "./features/user";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./features/user/userSlice";
function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  console.log(user);
  return (
    <>
      <Cake />
      <IceCream />
      <User />
    </>
  );
}

export default App;
