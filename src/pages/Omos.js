//for Medarbejder afsnit kilde:https://www.youtube.com/watch?v=UF5ASYh07E4
import mette from "../images/omosteam/metteBehShortPx.png";
import astrid from "../images/omosteam/astridBehShortPx.png";
import mira from "../images/omosteam/miraBehShortPx.png";
import ekhlas from "../images/omosteam/ekhlasBehShortPx.png";

//Kilde:https://fontawesome.com/v5/docs/web/use-with/react
import { NavLink } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebookSquare, faLinkedin} from '@fortawesome/free-brands-svg-icons';
//lært at embedde icons fra: https://www.youtube.com/watch?v=7fdpzXeXbcE 
import { faLightbulb, faMountain } from '@fortawesome/free-solid-svg-icons' //kilde:(https://fontawesome.com/icons/mountain?f=classic&s=solid) og (https://fontawesome.com/icons/lightbulb?f=classic&s=solid)

//wavybanner lært fra:https://www.youtube.com/watch?v=yRZALD0oNgU
//Hentet fra: https://getwaves.io/

<script src="https://kit.fontawesome.com/0cb8c02c78.js" crossorigin="anonymous"></script>

export default function Omos() {
    return (
        <div className="container">

        <section className="omOsbanner">
            <h1>Vores historie</h1>
            <p className="omOsP">Green Wave Design bliver stiftet I 2023 med missionen om at være det mere bæredygtige 
                valg som samarbejdspartner, når det skal udvikles nyt webdesign.<br></br><br></br>

                Bag bureauet står 4 multimediedesignere drevet af en stærk passion for at udbrede 
                kendskabet til hvordan man kan skabe webdesign der er mindre miljøbelastende.<br></br><br></br>

                Vi sætter den personlige relation i centrum, og er jeres betroede partner gennem hele processen. 
                Vi hjælper jer med at optimere jeres digitale bæredygtighedstiltag med udgangspunkt i netop 
                din forretnings strategi, budget og driftsmuligheder.</p>
            <br/>
            <h3 className="omOsCitat">“Digital bæredygtighed er ikke bare en trend, det er vores passion.”</h3>
        </section>

        <section className="værdier">
                <div className="V-søjle">
                    <h2 >Mission</h2>
                    <FontAwesomeIcon className="værdierIcon" icon={faMountain} />
                    <p className="værdierP">Vi designer websites der er performance optimeret, energieffektive og bidrager til at formindske dataforbrug og dermed co2 udledning.</p>
                </div>

                <div className="V-søjle">
                    <h2>Vision</h2>
                    <FontAwesomeIcon className="værdierIcon" icon={faLightbulb} />
                    <p className="værdierP">Vi vil skabe en mere bæredygtig tilgang til webdesign, for at gøre internettet mere tilgængeligt og mindre forurenende. </p>
                </div>
                <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F0EBE8" fill-opacity="1" d="M0,96L48,112C96,128,192,160,288,192C384,224,480,256,576,240C672,224,768,160,864,138.7C960,117,1056,139,1152,133.3C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            </section>

            <section className="containerOmos">

                <h2 className="teamOverskrift">Vores team</h2>
            
            <div className="row">
            <div className="col">
            <img src={mette} className="pic" alt="Ekhlas"></img>
            <div className="layer">
                <img  src={mette} alt="" className="picOver"></img>
            </div>

            <div className="info">
                <h2 className="teamh2">Mette</h2>
                <p className="teamP">
                        mette@gwd.dk<br></br> 
                        Design, UX og webudvikling</p>
                <div className="icons">
                <NavLink className="iconeLink" to="/"><FontAwesomeIcon className="fa-brands fa-facebook"  icon={faFacebookSquare}></FontAwesomeIcon></NavLink>
                <NavLink className="iconeLink" to="/"><FontAwesomeIcon className="fa-brands linkedin" icon={faLinkedin}></FontAwesomeIcon></NavLink>
                </div>
            </div>
        </div>

        <div className="col">
                <img src={astrid} className="pic" alt="Ekhlas"></img>
            <div className="layer">
                <img  src={astrid} alt="" className="picOver"></img>
            </div>
            <div className="info">
                <h2 className="teamh2">Astrid</h2>
                <p className="teamP">
                    astrid@gwd.dk <br></br> 
                    Design og webudvikling</p>
            <div className="icons">
                <NavLink className="iconeLink" to="/"><FontAwesomeIcon className="fa-brands fa-facebook"  icon={faFacebookSquare}></FontAwesomeIcon></NavLink>
                <NavLink className="iconeLink" to="/"><FontAwesomeIcon className="fa-brands linkedin" icon={faLinkedin}></FontAwesomeIcon></NavLink>
            </div>
            </div>
            </div>

            <div className="col">
                <img src={mira} className="pic" alt="Ekhlas"></img>
            <div className="layer">
                <img src={mira} alt="" className="picOver"></img>
            </div>
            <div className="info">
                <h2 className="teamh2">Mira</h2>
                <p className="teamP">
                    mira@gwd.dk<br></br> 
                    Design og webudvikling</p>
                <div className="icons">
                    <NavLink className="iconeLink" to="/"><FontAwesomeIcon className="fa-brands fa-facebook"  icon={faFacebookSquare}></FontAwesomeIcon></NavLink>
                    <NavLink className="iconeLink" to="/"><FontAwesomeIcon className="fa-brands linkedin" icon={faLinkedin}></FontAwesomeIcon></NavLink>
                </div>
             </div>
            </div>

            <div className="col">
                <img src={ekhlas} className="pic" alt="Ekhlas"></img>
            <div className="layer">
                <img  src={ekhlas} alt="" className="picOver"></img>
            </div>
            <div className="info">
                <h2 className="teamh2">Ekhlas</h2>
                <p className="teamP">
                ekhlas@gwd.dk<br></br> 
                Seo, UX og webudvikling</p>
                <div className="icons">
                    <NavLink className="iconeLink" to="/"><FontAwesomeIcon className="fa-brands fa-facebook"  icon={faFacebookSquare}></FontAwesomeIcon></NavLink>
                    <NavLink className="iconeLink" to="/"><FontAwesomeIcon className="fa-brands linkedin" icon={faLinkedin}></FontAwesomeIcon></NavLink>
                </div>
            </div>
            </div>
            </div>
            </section>
        </div> 
        )

}