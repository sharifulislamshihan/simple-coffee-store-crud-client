import { createBrowserRouter } from "react-router-dom";
import Roots from "../Layouts/Roots";
import Home from "../Home/Home/Home";


const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Roots></Roots>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
            },
        ]
    },
]);

export default Routes;