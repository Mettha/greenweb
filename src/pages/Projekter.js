import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSailboat} from '@fortawesome/free-solid-svg-icons';
import wave from "../images/greywaves.svg";
import { NavLink } from 'react-router-dom';

export default function Projekter() {
    return (
        <main>
            <div>
            <h1>404 Siden blev ikke fundet</h1>
            <h2>Hov, skibet ikke er ladet med noget!</h2>
            <p>Af en eller anden grund (sikkert teknisk) er denne side blevet flyttet eller slettet. <br/> Vi beklager meget og er kede af du kom forgæves. 
            </p>
            <br/>
            </div>

            <div className='boat'>
            <FontAwesomeIcon icon={faSailboat} />
            </div>
            <div>
                <img src={wave} alt="waves" className="wave"/>
            </div>

            <div>
            <p>Kom sikkert tilbage i havn.
            </p>
            <NavLink to="/Forside"><button className="btn-home">Hjem</button></NavLink>
            </div>

        </main>
        )
}