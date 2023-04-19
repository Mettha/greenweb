export default function BookingKort({post}) {
    return (
        <div className="kort">
            <div className="tekst">
                <h3>BOOKING</h3>
                <hr/>
                <p>Navn {post.navn}</p>
                <p>Firma{post.firma}</p>
                <p>Email {post.email}</p>
                <p>Telefon {post.telefon}</p>
                <p>Besked {post.besked}</p>
            </div>
        </div>
    ) 
 }