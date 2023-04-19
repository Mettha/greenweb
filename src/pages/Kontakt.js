import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faEnvelopeOpenText, faHeadset, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

//!!!Har forsøgt at tilkoble Auto-Send  mail til gamil via emailjs-React ved at følge denne video: https://www.youtube.com/watch?v=NgWGllOjkbs
// og har installeret denne kommando ( npm install emailjs-com --save), Men pga. tidmangel belv det droppet.
//import emailjs from 'emailjs.com'!!!!;

export default function Kontakt() {
    return (
        <main>
            <section className="kontaktside-container">
            <div className="kontakt-side-banner">

                <h1 className="kontak-overskrift">Her kan du kontakte os</h1>

                <h4 className="kontakt-spg">Har du spørgsmål eller brug for hjælp? </h4>
                <p>
                    Tøv ikke med at kontakte os, vi sidder klar til at hjælpe dig 
                    med alt fra at booke møde med en konsulent, undervisning 
                    af dine medarbejdere, samt service og support til dit 
                    Green Wave website.
                </p>
            </div>

            <section className="KontakLinks">
             <div className="k-søjle support">
                 <FontAwesomeIcon className="kontakSide-Icon" icon={faEnvelopeOpenText} />
                 <br/>
                 <br/>
                 <p className="værdierP"><b>info@gwd.dk</b></p>
             </div>

             <div className="k-søjle telefon">
                 <FontAwesomeIcon className="kontakSide-Icon" icon={faPhoneVolume} />
                 <h6>Hovedkontoret</h6>
                 <p className="værdierP"><b>+45 26 16 16 16</b></p>
             </div>

             <div className="k-søjle mail">
                 <FontAwesomeIcon className="kontakSide-Icon" icon={faHeadset} />
                 <br/>
                 <br/>
                 <p className="værdierP"><b>support@gwd.dk</b> </p>
             </div>
         </section>
         </section>
        </main>
)

}