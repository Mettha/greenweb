import { NavLink } from "react-router-dom";
import footerlogo from "../images/comLogoFoot.png"

//kilde To add brands-icons https://www.youtube.com/watch?v=L4CK3j72SfM
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
                </div>

                <div className="footerGenvej">
                    <NavLink className="footerlink">Forretningsbetingelser</NavLink>
                    <NavLink className="footerlink">Digital Bæredygtighed</NavLink>  
                    <NavLink className="footerlink" to="/omos">Om os </NavLink> 
                    <NavLink className="footerlink">Jobs</NavLink> 
                    <NavLink className="footerlink">Privatlivspolitik </NavLink>
                    <NavLink className="footerlink"> Cookies </NavLink>
                </div>

                
                <div className="some">
                    <NavLink className="footerlogo" to="/Forside"> <img src={footerlogo} alt="Footer logo"/> </NavLink>
                        <h3>Følg os</h3>
                         <div className="someIcons">
                         <FontAwesomeIcon  icon={faFacebookSquare}></FontAwesomeIcon>
                         <FontAwesomeIcon  icon={faLinkedin}></FontAwesomeIcon>
                         </div>
                </div>
            </nav>
        </footer>
    )
}