import ReactDOM from "react-dom/client"
import Home from "./components/Home";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Header from "./components/Header";

const AppLayout = () => {
    return(
        <>
        <Header/>
        <Outlet/>
        </>
    )
}


const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/favorites",
                element:<Home/>
            }
        ],
        errorElement:<Error/>
    },
    
]);


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>);