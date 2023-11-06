import { createBrowserRouter } from "react-router-dom";
import Roots from "../Layouts/Roots";
import Home from "../Home/Home/Home";
import AddCoffee from "../AddCoffee/AddCoffee";
import UpdateCoffee from "../UpdateCoffee/UpdateCoffee";
import ViewCoffee from "../ViewCoffee/ViewCoffee";
import Login from "../Login/Login";
import Register from "../Register/Register";


const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Roots></Roots>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/coffee')
            },
            {
                path:'/addCoffee',
                element:<AddCoffee></AddCoffee>,
            },
            {
                path:'/updateCoffee/:id',
                element: <UpdateCoffee></UpdateCoffee>,
                loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
            },
            {
                path:'/viewCoffee/:id',
                element: <ViewCoffee></ViewCoffee> ,
                loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
            },
            {
                path:'/login',
                element:<Login></Login>,
            },
            {
                path:'/register',
                element: <Register></Register>,
            },
        ]
    },
]);

export default Routes;