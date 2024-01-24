import SearchExercise from "./Pages/SearchExercise";
import BmiCalculator from "./Pages/BmiCalculator";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SearchExercise/>,
  },
  {
    path: "/BmiCalculator",
    element: <BmiCalculator/>
  }
]);




function App() {
  return (
    <div>
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
