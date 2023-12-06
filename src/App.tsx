import React from "react";
// import "./App.css";
// import Application from "./components/application";
import Counter from "./components/counter";
import AppProvider from "./providers";
import Mode from "./components/muiMode";
function App() {
  return (
    <>
      <AppProvider>
        <Mode />
        <Counter />
        {/* <Application />; */}
      </AppProvider>
    </>
  );
}

export default App;
