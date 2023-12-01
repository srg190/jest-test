import { createBrowserRouter } from "react-router-dom";
import File1 from "./components/file-001";
import File2 from "./components/file-002";
const App = createBrowserRouter([
  {
    path: "/",
    element: <File1 />,
    loader: async () =>
      fetch("https://jsonplaceholder.typicode.com/todos").then((response) =>
        response.json()
      ),
    children: [
      {
        element: <File2 />,
        path: ":userID"
      }
    ]
  },
]);

export default App;
