import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BookingForm from "../../components/admin/BookingForm";

export default function OpdaterBooking() {

    const navigate = useNavigate();
    const [post, setPost] = useState({});
    const params = useParams();

    const url = `https://greenwavedesign-9457c-default-rtdb.europe-west1.firebasedatabase.app//bookinger/${params.postId}.json`;

    useEffect(() => {
        async function getPost() {
          const response = await fetch(url);
          const data = await response.json();
          // post variablen indeholder oplysninger om den valgte bookingsaftale
            setPost(data);
          }
          getPost();
        }, [url]);

        async function savePost(postToUpdate) {
            const response = await fetch(url, {
              method: "PUT",
              body: JSON.stringify(postToUpdate)
            });
            const data = await response.json();
            console.log(data);
            // Efter gemt aftale sendes brugeren til /bookinger -> AdminBooking
            navigate("/bookinger");
          }


          async function deletePost() {
            const bekraeftSletning = window.confirm(`Vil du slette denne aftale?`) 
           
    if (bekraeftSletning) {
            const url = "https://greenwavedesign-9457c-default-rtdb.europe-west1.firebasedatabase.app/bookinger.json";
            const firstResponse = await fetch(url);
            const firstData = await firstResponse.json();
            
            firstData.splice(params.postId, 1); // Delete element from array
                   
            const response = await fetch(url, {
                method: "PUT", // Overwrites database
                body: JSON.stringify(firstData) // Rewrite database
            });
            
            const data = await response.json();
            console.log(data);
            // efter sletning går browseren til /bookinger -> 
            navigate("/bookinger");
            }
            }

            return (
                <section className="aftale">
                  <h1>Opdatér Bookingaftale</h1>
                  <BookingForm post={post} savePost={savePost}/>
                  <button className="btn-delete" onClick={deletePost}>Slet Aftale</button>
                </section>
            );
            }