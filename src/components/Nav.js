import { NavLink } from "react-router-dom";

import animlogo from "../animations/wavelogo.json";
import Lottie from "lottie-react"; 

export default function Nav(){
    return (
        <nav className="globalnavigation">
            <NavLink className="navpunkt" to="/omos">Om os</NavLink>
            <NavLink className="navpunkt" to="/projekter">Projekter</NavLink>
            <NavLink className="navlogo" to="/Forside"> <Lottie animationData={animlogo} loop={false} height={800} widt={1000}/> </NavLink>
            <NavLink className="navpunkt" to="/bookmøde">Book møde</NavLink>
            <NavLink className="navpunkt" to="/kontakt">Kontakt</NavLink>

        </nav>
    )
}