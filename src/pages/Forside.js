// images er blevet navngivet med de effekter, de forskellige images er behandlet med samt at det er er blevet komprimeret ligesom comSurf Dvs. video som hedder surf er komprimeret
//Insert video in background. kilde: https://www.youtube.com/watch?v=LSRNmhLS76o
import videobg from '../assets/comSurf.mp4';
import animation from "../images/flipkort/animation-desktop.png";
import KompVideo from "../images/flipkort/KompVideoBehshortPx.png";
import vælgeSkriftTypeBehShortpx from "../images/flipkort/vælgeSkriftTypeBehShortpx.png";
import freegif from "../images/flipkort/freeGifBehShortpx.png";
import licensfont from "../images/flipkort/licensfontShortpx.png";
import systemfont from "../images/flipkort/systemfontBehShortPx.png"; //kilde:https://www.readyartwork.com/web-safe-fonts-affect-website/
import jpg from "../images/flipkort/jpgUdenBeh.webp"; //kilde:https://www.shutterstock.com/da/search/jpeg
import png from "../images/flipkort/pngVSjpgBehShortpx.jpg"; //kilde:https://www.stellarinfo.com/blog/jpg-vs-png/
import avif from "../images/flipkort/avifBehShortPx.png";//kilde:https://duplika.com/en/blog/avif-compression-images/
import webp from "../images/flipkort/webpBehshortPx+blur.png";//kilde:https://www.reddit.com/r/Wordpress/comments/p36h4r/what_do_you_think_of_webp_image_formats_in_wp_58/
import monokrome from "../images/flipkort/s-hBehShortpx+crub+blur.png";//kilde:https://www.pinterest.dk/pin/724657396269655157/
import oledskærme from "../images/flipkort/oledSkærmeBehPsd.png";//kilde:https://www.kyulux.com/the-oled-market/
import farver from "../images/flipkort/farverBehShort+blur.png"; //kilde:https://udforsksindet.dk/nogle-spaendende-fakta-om-farver/
import typografi from "../images/flipkort/typoBehshortPx+blur.png"; //kilde:https://www.onlineplus.dk/dit-valg-typografi-kan-vise-sig-vaere-idioti/
import Filtyper from "../images/flipkort/filtryperBehShortPX+blur+hue.png"; //kilde:https://digitalfoto.dk/billedbehandling/faa-styr-paa-filformaterne-til-fotos
//kilde for gif-filer anvendt under animation afsnit hentet fra: https://giphy.com/explore/film-clapper 

//redirect to another page on button click: https://bobbyhadz.com/blog/react-onclick-redirect
import {useNavigate} from 'react-router-dom';

export default function Forside() {
    const navigate = useNavigate();

  const navigateToBookmøde = () => {
    // 👇️ navigate to bookmøde-siden
    navigate('/bookmøde');
  };

return (
    <main>
        <div className="forsidebanner">
            <video className='videobg' src={videobg} autoPlay loop/>
            <div className="content">
                <h1>Surf med på den grønne bølge <br></br> mod mere bæredygtigt webdesign</h1>
                <br/>
                <p>Hos Green Wave Design hjælper vi dig gennem processen med at gøre dit website lidt grønnere.<br></br>
                    Sammen kan vi skabe en mere bæredygtig digital verden.</p>
            </div>
        </div>

 
        <div className='flip-bøger-section'>
            <h1 className='flip-book-overskrift'>Skal vi gøre din virksomheds website <br></br> mere energieffektiv?</h1>
            <div className='sec1'>
                <div className='bog1'>
                    <h3 >Filtyper & filstørrelser</h3>
                <div className='book'>
                    <input type="checkbox" id='c1'></input>
                    <input type="checkbox" id='c2'></input>
                    <input type="checkbox" id='c3'></input>
                    <input type="checkbox" id='c4'></input>
                    <input type="checkbox" id='c5'></input>
                    <div id="cover1">
                        <img src={Filtyper} className='kortbillede' alt=''></img>
                    </div>

                <div className='flip-book'>
                    <div className='flip' id='p1'>
                        <div className='back'>
                            <img src={webp} className='kortbillede' alt=''></img>
                            <label className='back-btn' for="c1">Tilbage</label>
                        </div>

                    <div>
                        <p className='paragraph'>Brug af billeder i webudvikling opsuger meget energi og udleder dermed mere CO2.
                        <br></br>
                        <br></br>Hvad vi kan vælge at gøre for at mindske deres CO2 udledning effekt er ret simpel, 
                                hvilket er at reducere deres vægt ved at bruge de mest effektive filformater og 
                                komprimeringsværktøjer til optimere dem.
                                <br></br>
                                <br></br>
                                Forskellige filformater samt deres størrelser:</p>
                            <label className='next-btn' for="c1">Næste</label>
                            </div>
                    </div>

                            
                            <div className="flip" id='p2'>
                                <div className='back'>
                                    <img src={avif} className='kortbillede'alt=''></img>
                                    <label className='back-btn' for="c2">Tilbage</label>
                                </div>
                                <div>
                                    <h2>WEBP</h2>
                                    <br></br>
                                    
                                    <p className='paragraph'>Mest effektive format til at komprimere fotografier, typisk fylder det kun 981 kB ca. 30 procent mindre end JPEG.
                                    <br></br>
                                    <br></br>
                                    Ved komprimering kan der spares diskplads i server og betydelig båndbredde med 
                                    op til 35% mindre billedfiler til identisk kvalitet.  
                                    </p>
                                    <label className='next-btn' for="c2">Næste</label>
                                </div>
                            </div>

                            <div className='flip' id=' p3'>
                                <div className='back'>
                                    <label className='back-btn' for="c3">Tilbage</label>
                                </div>
                                <div>
                                    <h2>JPEG</h2>
                                    <p className='paragraph'>Er egnet til fortografier. Filerne gemmes i såkaldt 
                                    ­lossy-komprimering for at reducere filstørrelsen. <br></br>
                                        <br></br>Det betyder at nogle af blillededata bliver slettet 
                                    og dermed ringere kvalitet. De slettet data afhænger af komprimeringstypen. 
                                    <br></br>Originale JPG-billede fylder 3,9 MB og komprimereret fylder 1,4 MB.</p>
                                    <label className='next-btn' for="c3"></label>
                                </div>
                            </div>

                            <div className='flip' id='p4'>
                                <div className='back'>
                                <img src={png} className='kortbillede' alt=''></img>
                                    <label className='back-btn' for="c4">Tilbage</label>
                                </div>
                                <div>
                                    <h2>AVIF</h2>
                                    <p className='paragraph'>Bruges til at gemme rastergrafik i AV1 billedfilformat. 
                                        <br></br>
                                        <br></br>
                                        Det er en nyere billedfil end WEBP og mere effektiv mht. browserkompatibilitet, 
                                        da den kan fylde mindre end halvdelen af WEBP-fil og på samme kvalitetsniveauet 
                                        med JPEG og PNG-filer.</p>
                                    <label className='next-btn' for="c4">Næste</label>
                                </div>
                            </div>

                            <div className='flip' id='p5'>
                                <div className='back'>
                                    <img src={jpg} className='kortbillede'alt=''></img>
                                    <label className='back-btn' for="c5">Tilbage</label>
                                </div>
                                <div >
                                    <h2>PNG</h2>
                                    <p className='paragraph'>PNG - Anvendes når der ønskes en høj billedkvalitet med tekst indblandet 
                                        fx. logo eller et banner med meget tekst. 
                                        <br></br>
                                        <br></br>
                                        Den vælges også pga. sin transparente baggrund 
                                        eller gradueringer. Filen kan fylde 235 kb.</p>
                                    <label className='next-btn' for="c5">Næste</label>
                                </div>
                            </div>

                            </div>
                        </div>
                    </div>

                    <div className='bog2'>
                        <h3>Typografi</h3>
                        <div className='book'>
                        <input type="checkbox" id='a1'></input>
                        <input type="checkbox" id='a2'></input>
                        <input type="checkbox" id='a3'></input>
                        <input type="checkbox" id='a4'></input>
                        <input type="checkbox" id='a5'></input>
                        
                        <div id="cover2">
                            <img src={typografi} className='kortbillede' alt=''></img>
                        </div>

                        <div className='flip-book'>
                            <div className='flip' id='p1'>
                                <div className='back'>
                                    <img src={systemfont} className='kortbillede'alt=''></img>
                                    <label className='back-btn' for="a1">Tilbage</label>
                                </div>
                                <div>
                                    <p className='paragraph'>Valg af typografi har også indvirkning på din hjemmesidens energiforbrug og effektivitet.
                                    <br></br>
                                    <br></br>
                                    Nogle webfonts kan forøge mængden af dataoverførsel.
                                    Vi anbefaler altid at bruge system fonts, da de er mest energieffektive, idet de er præinstallerede på devices.</p>
                                    <label className='next-btn' for="a1">Næste</label>
                                </div>
                            </div>

                            
                            <div className="flip" id='p2'>
                                <div className='back'>
                                    <img src={licensfont} className='kortbillede'alt=''></img>
                                    <label className='back-btn' for="a2">Tilbage</label>
                                </div>
                                <div>
                                    <p className='paragraph'>System fonts har den fordel at de hverken kræver dataoverførsel og server requests for at bruge dem.<br></br>
                                    <br></br>
                                        Ulempen kan være at det giver et mindre kreativt eller unikt design og ikke er ens på 
                                        alle devices. <br></br>
                                    <br></br>Men her kan løsningen være at bruge en non-system font til overskrifter
                                         og en system font til brødtekster.</p>

                                    <label className='next-btn' for="a2">Næste</label>
                                </div>
                            </div>

                            <div className='flip' id='p3'>
                                <div className='back'>
                                <img src={vælgeSkriftTypeBehShortpx} className='kortbillede'alt=''></img>
                                    <label className='back-btn' for="a3">Tilbage</label>
                                </div>
                                <div>
                                <br></br>
                                    <p className='paragraph'>Det vil også være en fordel at bruge en font, der er tilgængelig som standalone font, 
                                        da font filen vil kunne hostes direkte på din side. <br></br>
                                    <br></br>
                                        I modsætning til licens fonte på abonnement der laver server requests og derved 
                                        forøger energiforbruget og gør din side langsommere.</p>
                                        
                                    <label className='next-btn' for="a3">Næste</label>
                                </div>
                            </div>


                            <div className='flip' id='p5'>
                                <div className='back'>
                                    <label className='back-btn' for="a5">Tilbage</label>
                                </div>
                                <div >
                                    <p className='paragraph'>I designprocessen er det værd at kaste et kritisk blik på brugen af fonts, i forhold til hvor mange forskellige fonts og tykkelser der er brug for.
                                        Da hver tykkelse kommer i separate font filer vil det kun forøge loading time og energiforbrug.<br></br>
                                    <br></br>
                                        Så har du virkelig brug for en standard, light, semi-bold og bold udgave af din skrifttype 
                                        eller kan du nøjes med en eller to af ovenstående.</p>
                                </div>
                            </div>

                        </div>
                        </div>

                    </div>
                </div>




                <div className='sec2'>
                    <div className='bog3'>
                        <h3>Energi effektive farver</h3>
                        <div className='book'>
                        <input type="checkbox" id='b1'></input>
                        <input type="checkbox" id='b2'></input>
                        <input type="checkbox" id='b3'></input>
                        <input type="checkbox" id='b4'></input>
                        <input type="checkbox" id='b5'></input>
                        <div id="cover3">
                            <img src={farver} className='kortbillede'alt=''></img>

                        </div>

                        <div className='flip-book'>
                            
                            <div className='flip' id='p1'>
                                <div className='back'>
                                    <img src={oledskærme} className='kortbillede'alt=''></img>
                                    <label className='back-btn' for="b1">Tilbage</label>
                                </div>
                                <div>
                                    <p className='paragraph'>Vidste du at farvevalget for dit website har betydning for dit batteri levetid? I hvert fald hvis du har en OLED skærm. 
                                        <br></br>
                                        <br></br>
                                        Sort bruger mindst energi, rød og grøn, næst mindst.  Derefter kommer blå, som bruger 25% mere energi end rød og grøn. Til sidst er farven hvid, som bruger mest energi. </p>
                                    <label className='next-btn' for="b1">Næste</label>
                                </div>
                            </div>

                            
                            <div className="flip" id='p2'>
                                <div className='back'>
                                    <img src={monokrome} className='kortbillede'alt=''></img>
                                    <label className='back-btn' for="b2">Tilbage</label>
                                </div>
                                <div>
                                    <p>De nyeste laptops og smartphones har OLED skærm, og disse skærme bliver mere og mere udbredte, derfor vil det fremadrettet blive nødvendigt at indtænke dette i valget af farverne på dit website.</p>
                                    <label className='next-btn' for="b2">Næste</label>
                                </div>
                            </div>


                            <div className='flip' id='p4'>
                                <p>Det samme gør sig gældende for billeder. Sort/ hvide og monokrome billeder bruger mindre energi 
                                    end billeder med mange farver.
                                </p>
                               
                            </div>

                           

                            </div>
                        </div>

                    </div>




                    <div className='bog4'>
                        <h3>Animationer</h3>
                    <div className='book'>
                        <input type="checkbox" id='d1'></input>
                        <input type="checkbox" id='d2'></input>
                        <input type="checkbox" id='d3'></input>
                        <input type="checkbox" id='d4'></input>
                        <input type="checkbox" id='d5'></input>
                        <div id="cover4">
                            <img src={animation} className='kortbillede'alt=''></img>

                        </div>

                        <div className='flip-book'>
                            

                            <div className='flip' id='p1'>
                                <div className='back'>
                                <iframe src="https://giphy.com/embed/U8FvqfxkzxoSpokGaW"></iframe> 
                                    <label className='back-btn' for="d1">Tilbage</label>
                                </div>
                                <div>
                                    <p className='paragraph'>Inden for webudviklingsverden fremtræder produktion af videoer og animationer også  
                                    som en kæmpe kilde for co2 forurening. 
                                    Derfor anbefaler vi, at man inddrager videoer i sine webdesigns med omhu.
                                    <br></br> <br></br>
                                    Man opererer mellem to filtyper for animationer eller normale 
                                    video-optagelser, når der skal inkorporeres videoer i webudvikling. </p>
                                    <label className='next-btn' for="d1">Næste</label>
                                </div>
                            </div>

                            
                            <div className="flip" id='p2'>
                                <div className='back'>
                                <iframe src="https://giphy.com/embed/WO5XB6bQ0h1MoGc1mJ" ></iframe>
                                    <label className='back-btn' for="d2">Tilbage</label>
                                </div>
                                <div>
                                    <h2>GIF</h2>
                                    <p className='paragraph'>Gif er  bedst at anvende, hvis animationer ønskes. Den er egnet 
                                        til simple billeder såsom ikoner og logoer, da den understøtter få farver 
                                        sammenlignet med andre filformater. <br></br> <br></br>Filstørrelser er ret afhængige af data 
                                        indhold for gif-filen, hvor det kan rumme op til 5 MB.</p>
                                    <label className='next-btn' for="d2">Næste</label>
                                </div>
                            </div>

                            <div className='flip' id='p3'>
                                <div className='back'>
                                <img src={freegif} className='kortbillede'alt=''></img>
                                    <label className='back-btn' for="d3">Tilabge</label>
                                </div>
                                <div>
                                    <h2>MP4</h2>
                                    <p className='paragraph'>MP4- MP4 generelt er mere effektivt og leverer mindre filer end animerede GIF, 
                                        og giver også bedre tilgængelighed med funktioner såsom lydbeskrivelsesspor
                                         og billedtekster. <br></br> <br></br>Kvaliteten er dermed afhængiger af kamera og lyd kvaliteten. 
                                         Der er ingen begrænsninger mht. fil størrelsen. </p>
                                    <label className='next-btn' for="d3">Næste</label>
                                </div>
                            </div>

                            <div className='flip' id=' p4'>
                                <div>
                                    <p className='paragraph'><br></br> <br></br>Desuden findes der også utallige komprimering værktøjer til videoproduktion, 
                                    hvor filstørrelser kan formindskes til det minimale og dermed kan der opnås hurtigere webloading 
                                    hastighed, og dermed mindre energiforbrug. </p>
                                </div>
                            </div>

                            <div className='flip' id='p5'>
                                <div className='back'>
                                <img src={KompVideo} className='kortbillede'alt=''></img>
                                    <label className='back-btn' for="d5">Tilbage</label>
                                </div>
                                <div >
                                    <p className='paragraph'>Men det er også muligt at embedde youtube videoer i webudviklingen uden nødvendigvis 
                                        at have gemt videoer lokalt på egen enhed og derefter uploade det på den tilknyttede server. 
                                        <br></br> <br></br>Ved at anvende denne metode sparer vi på det antal gange data bliver gemt på forskellige
                                         servere og dermed genanvender de samme materialer uendelige gange. </p>
                                    <label className='next-btn' for="d5">Næste</label>
                                </div>
                            </div>

                        </div>
                        </div>
                    </div>
            </div>
        </div>







            <div className='f-bookmøde'>
                
                <h1>Book møde med os idag</h1>
                <br/>
                <p>Har du en travl hverdag med fuldt fokus på din forretningsudvikling? <br/> 
                    Kunne ord som system font og green hosting lige så godt være russiske fraser?Bare rolig vi er passionerede omkring at gøre webdesign mere bæredygtigt og varetager alle opgaver i udviklingen, så du kan bruge din tid på at udvikle din forretning.<br/>
                    <br/>
                    Du kan trygt lægge udviklingen af dit nye website i vores hænder. 
                    Vi hjælper dig fra A-Z med at optimere dit website til at have mindre påvirkning på miljøet end de gængse websites derude.
                    <br/>
                    <br/>
                    Vi er altid opdateret på den nyeste viden og teknologier indenfor grønnere webdesign, så du ikke behøver at være det. 
                    <br/>
                     Book et møde idag og bliv klogere på hvordan vi kan hjælpe dig godt på vej i din rejse mod en mere bæredygtig digital fremtid.</p>
                               
                    </div>

                    <div className="f-button">
                        <button className="btn-bookmøde" onClick={navigateToBookmøde}>BOOK MØDE</button>
                    </div>
                
                <div>

            </div>

        </main>
        )

}


