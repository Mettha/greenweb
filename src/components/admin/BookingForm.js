import { useEffect, useState } from "react";

export default function BookingForm({ savePost, post }){
    const [navn, setNavn] = useState("");
    const [email, setEmail] = useState("");
    const [telefon, setTelefon] = useState(0);
    const [firma, setFirma] = useState("");
    const [besked, setBesked] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        if (post) {
            setNavn(post.navn)
            setEmail(post.email);
            setTelefon(post.telefon);
            setFirma(post.firma)
            setBesked(post.besked)
            }
            }, [post]); 

            async function handleSubmit(e) {
                e.preventDefault();
                // Der oprettes et objekt "formData" med de oplysninger som blev indtastet i formularen.
                const formData = {
                    navn: navn,
                    email: email,
                    telefon: parseFloat(telefon),
                    firma: firma,
                    besked: besked
                    }

                const validForm = formData.navn && formData.email && 
                formData.telefon && formData.firma && formData.besked; 
                    if (validForm) {
                        savePost(formData);
                    } else {
                        setErrorMessage("Udfyld venligst alle felter.");
                    }
                    }

return (
<form className="formularlayout" onSubmit={handleSubmit} >

<label>
    Navn<input className="inputfelt" type="text" name="navn" value={navn} placeholder="Indtast
    navn" onChange={e => setNavn(e.target.value)} />
</label>

<label>
    Email<input className="inputfelt" type="text" name="email" value={email} placeholder="Indtast
    email" onChange={e => setEmail(e.target.value)} />
</label>

<label>
    Telefon<input className="inputfelt" type="text" name="telefon" value={telefon} placeholder="Indtast
    telefonnummer" onChange={e => setTelefon(e.target.value)} />
</label>

<label>
    Firma<input className="inputfelt" type="text" name="firma" value={firma} placeholder="Indtast
    firma" onChange={e => setFirma(e.target.value)} />
</label>

<label>
    Besked<input className="inputfelt" id="beskedfelt" type="text" name="besked" value={besked} placeholder="Hvad kan vi hjælpe dig med?" 
    onChange={e => setBesked(e.target.value)} />
</label>

<p className="tekst-fejl">{errorMessage}</p><button type="submit">Submit</button>
</form>
);
}  
                    
            
                    
                  