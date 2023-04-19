import { useNavigate } from "react-router-dom";

export default function BookingAdminKort({post}){
    const navigate = useNavigate();

    function opdaterKlik(){
        navigate(`posts/${post.id}`);
    }

    return (
        <div className="kort bookingskort" onClick={opdaterKlik}>
            <div className="tekst">
                <h3>Booking</h3>
                <hr/>
                <p>Navn {post.navn}</p>
                <p>Firma {post.firma}</p>
                <p>Email {post.email}</p>
                <p>Telefon {post.telefon}</p>
                <p>Besked {post.besked}</p>
            </div>
        </div>
    );
}