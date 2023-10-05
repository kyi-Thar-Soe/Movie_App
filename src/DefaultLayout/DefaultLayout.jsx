import { Outlet, useNavigate } from "react-router";
import Navbar from "../Components/Navbar/Navbar";
import { useEffect } from "react";
import { getToken } from "../Storage/Storage";

export default function DefaultLayout() {
    const navigate = useNavigate();
    const check = async () => {
        const token = await getToken();
        if(!token){
            navigate('/')
        }
    };
    useEffect(()=> {
       check()
    },[]);
    return (
        <>
            <div className="position-sticky top-0 bg-dark" style={{zIndex: "999"}}>
            <Navbar/>
            </div>
    	    <Outlet/>
        </>
    )
};