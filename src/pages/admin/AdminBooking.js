import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Bookingskort from "../../components/admin/BookingAdminKort";

export default function AdminBooking() {
    const [posts, setPosts] = useState([]);
    const [isPosts, setIsPosts] = useState(true); // isPosts can be true or false
    const navigate = useNavigate();

    useEffect(() => {
        async function getPosts() {
        const url = "https://greenwavedesign-9457c-default-rtdb.europe-west1.firebasedatabase.app/bookinger.json";
        const response = await fetch(url);
        // data indeholder alt indhold fra bookinger database
        const data = await response.json();

        if (data !== null) {
            const postsArray = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
            }));
                //variabel "posts" bliver lig med listen af bookede aftaler
                setPosts(postsArray);
            } else {
                // sætter variablen "isPosts" til false, for der er ingen bookings
                setIsPosts(false);
        }
        }
        getPosts();
        }, []);


// Event handler for klik på opret knap
function opretklik() {
    navigate("/opretaftale");
    }
    return (
        <main>
            <h1> 
            Administration af mødebooking <button className="btn-opret" type="button" onClick={opretklik}>+ Opret Ny Aftale</button>
            </h1>
    
        {isPosts ? (
            <div className="kortraekke">
                {posts.map((post) => (
                <Bookingskort key={post.id} post={post} />
                 ))}
            </div>
            ):(
            <p>Der er ingen bookinger</p>
            )}
        </main>
        );
        }