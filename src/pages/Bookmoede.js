import { useNavigate } from "react-router-dom";
import BookingForm from "../components/admin/BookingForm";

export default function OpretBooking() {
    const navigate = useNavigate();


    async function createPost(newPost) {

        const url = "https://greenwavedesign-9457c-default-rtdb.europe-west1.firebasedatabase.app/bookinger.json";
        const firstResponse = await fetch(url);
        let firstData = await firstResponse.json();

        if (firstData === null) { // If there are NO objects...(hvis data er lig med 0 (=== betyder lig med))
            firstData = [] // Create new array for objects
        }

        firstData.push(newPost); // Add new post to object list

        const response = await fetch(url, {
            method: "PUT", // Overwrites database
            body: JSON.stringify(firstData) // Rewrite database
        });

        const data = await response.json();
        console.log(data);
        navigate("/bekræftigelse");
    }


    return (
        <main>
            <div>
            <br/>
                <h1>Book et møde med os</h1>
                <br/>
                <p>Book et uforpligtende møde, hvor vi sammen drøfter, hvordan vi kan <br/> hjælpe dig og dit firma med at skabe et mere energieffektivt website.
                </p>
            </div>

            <div className="aftale">
            <br/>
             <BookingForm savePost={createPost} />
            </div>
     
            </main>
        )
}