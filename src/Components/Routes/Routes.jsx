import { createBrowserRouter } from "react-router-dom";
import Roots from "../Layouts/Roots";
import Home from "../Home/Home/Home";
import AddCoffee from "../AddCoffee/AddCoffee";
import UpdateCoffee from "../UpdateCoffee/UpdateCoffee";


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
            },
            {
                path:'/updateCoffee',
                element: <UpdateCoffee></UpdateCoffee>,
            }
        ]
    },
]);

export default Routes;