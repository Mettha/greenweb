import { NavLink } from "react-router-dom";
import footerlogo from "../images/hvidt logo.svg"
import manifest from "../images/manifest logo.svg"

//kilde To add brands-icons https://www.youtube.com/watch?v=L4CK3j72SfM
//anvendt komandoere: npm i --save @fortawesome/fontawesome-svg-core
//                    npm install --save @fortawesome/free-brands-svg-icons
//                    npm install --save @fortawesome/react-fontawesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebookSquare} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';





export default function Sidefod(){
    return (
        <footer className="footer">
            <nav className="footerrubrikker">
                <div className="kontaktFooter">
                    <NavLink className="footerlink" to="/Kontakt"><h3>Kontakt os</h3></NavLink>
                        <p><b>Adresse </b>
                        <br></br>
                        Grønnegade 56
                        <br></br>
                        8000 Århus C
                        </p>
                        <NavLink className="footerlink"> <b>Telefon: </b>47 89 56 67</NavLink>
                        <NavLink className="footerlink"> <b>Mail: </b> info@greenwave.dk</NavLink>
                        <div className="someIcons-F">
                            <h3>Følg os</h3>
                            <div className="brandsIcons"> 
                                <NavLink className="iconeLink-F" to="/"><FontAwesomeIcon className="fb-icon-F"  icon={faFacebookSquare}></FontAwesomeIcon></NavLink>
                                <NavLink className="iconeLink-F" to="/"><FontAwesomeIcon className="lin-icon-F" icon={faLinkedin}></FontAwesomeIcon></NavLink>
                            </div>
                         </div>
                </div>

                <div className="footerGenvej">
                <br/>
                    <NavLink className="footerlink">Forretningsbetingelser</NavLink>
                    <br/>
                    <NavLink className="footerlink">Digital Bæredygtighed</NavLink>  
                    <br/>
                    <NavLink className="footerlink" to="/omos">Om os </NavLink> 
                    <br/>
                    <NavLink className="footerlink">Jobs</NavLink> 
                    <br/>
                    <NavLink className="footerlink">Privatlivspolitik </NavLink>
                    <br/>
                    <NavLink className="footerlink"> Cookies </NavLink>
                  
                </div>

                
                <div className="logoer">
                <img  className="manifest" src={manifest} alt="manifest"/>    
                <br/>
                <br/>
                    <NavLink className="footerlogo" to="/Forside"> <img src={footerlogo} alt="Footer logo"/> </NavLink>  
                </div>
            </nav>
        </footer>
    )
}