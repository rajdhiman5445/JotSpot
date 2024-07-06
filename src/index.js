import ReactDOM from "react-dom/client";
import Home from "./components/Home";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Create from "./components/Create";
import Edit from "./components/Edit";
import { useEffect, useState } from "react";
import Favorites from "./components/Favorites";
import Footer from "./components/Footer";
import Search from "./components/Search";

const AppLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer/>
        </>
    );
};

const RouterWrapper = () => {
    const [notes, setNotes] = useState( JSON.parse(localStorage.getItem('notesData')) || []);
    useEffect(()=>{
        localStorage.setItem('notesData', JSON.stringify(notes))
    }, [notes])
    

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <AppLayout/>,
            children: [
                {
                    path: "/",
                    element: <Home notes={notes} setNotes={setNotes}/>
                },
                {
                    path: "/favorites",
                    element: <Favorites notes={notes} setNotes={setNotes}/>
                },
                
            ],
            errorElement: <Error />
        },
        {
            path: "/create",
            element: <Create notes={notes} setNotes={setNotes} /> 
        },
        {
            path: "/edit/:id",
            element: <Edit notes={notes} setNotes={setNotes}/>
        },
        {
            path: "/search",
            element: <Search notes={notes}/>
        }
    ]);

    return <RouterProvider router={appRouter} />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterWrapper />);
