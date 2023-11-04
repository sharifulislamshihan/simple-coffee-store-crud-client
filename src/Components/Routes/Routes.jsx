import { createBrowserRouter } from "react-router-dom";
import Roots from "../Layouts/Roots";
import Home from "../Home/Home/Home";
import AddCoffee from "../AddCoffee/AddCoffee";


const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Roots></Roots>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path:'/addCoffee',
                element:<AddCoffee></AddCoffee>,
            }
        ]
    },
]);

export default Routes;