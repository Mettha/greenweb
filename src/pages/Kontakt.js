import smiley from "../images/smiley-icon.svg";

export default function Kontakt() {
    return (
       <main>
           <div>
            <br/>
                <h1>Her kan du kontakte os</h1>
                <br/>
                <p>Har du spørgsmål eller brug for hjælp? </p>
                <br/>
                <p>Tøv ikke med at kontakte os, vi sidder klar til at hjælpe dig med alt fra at booke møde med en konsulent, <br/>
                undervisning af dine medarbejdere, samt service og support til dit Green Wave website.</p>
            </div>

            <div className="kontakt-ikoner">
            <div>
            <br/>  
            <img src={smiley} alt="smiley face" className="smiley"/>
            <p>Hovedkontoret</p>
            <h4>+45 26161616 </h4>
            </div>

            <div>
            <br/>  
            <img src={smiley} alt="smiley face" className="smiley"/>
            <br/> 
            <br/> 
            <h4>info@gwd.dk </h4>
            </div>

            <div>
            <br/>  
            <img src={smiley} alt="smiley face" className="smiley"/>
            <br/> 
            <br/> 
            <h4>support@gwd.dk </h4>
            </div>
            </div>
       </main>

        )

}