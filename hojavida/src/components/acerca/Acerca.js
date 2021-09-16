import './Acerca.css'
function Acerca(){
    return(
        <div className="acerca">
            <div className="infolab">
                <h1 className="titlab"><i class="fas fa-graduation-cap"></i>ESTUDIOS</h1>
                <div className="estudio">
                    <h4 className="TituloCar">Antonio Nariño I.E.D - Bachiller</h4>
                    <h4 className="TituloCar2">2020</h4>
                    <p>Tras haberme mudado con mi papá, ingrese a hacer mi bachillerato en el Antonio Nariño, donde 
                        hice un técnico mientras finalizaba mi bachillerato.
                        
                    </p>
                </div>
                <div className="estudio">
                    <h4 className="TituloCar">Técnico en programación de software</h4>
                    <h4 className="TituloCar2">2020</h4>
                    <p>Los dos últimos años en el colegio elegí hacer el técnico en programación de software mientras finalizaba el bachillerato, cosa que me gusto para hacer en mi vida ya 
                     que me desenvolvía super bien con los lenguajes básicos de programación ya sea HTML, CSS.</p>
                </div>
                <div className="estudio">
                    <h4 className="TituloCar">Tecnólogo en Análisis y Desarrollo de Sistemas de Información – SENA </h4>
                    <h4 className="TituloCar">2021</h4>
                    <p>En este tiempo he pasado por grandes cosas que me han conllevado a conocer muchas cosas sobre 
                        lenguajes de programación, intento dar lo mejor de mi para ser exitosa en esta carrera.</p>
                </div>
                <h1 className="titlab"><i class="fas fa-brain"></i>HABILIDADES</h1>
                <div className="habilidades">
                <p className="info">Php</p><progress max="100" value="90"></progress>
                </div>
                <div className="habilidades">
                <p className="info">Java Script</p><progress max="100" value="65"></progress>
                </div>
                <div className="habilidades">
                <p className="info">Fron-end</p><progress max="100" value="75"></progress>
                </div>
                <div className="habilidades">
                <p className="info">Back-end</p><progress max="100" value="85"></progress>
                </div>
                <div className="habilidades">
                <p className="info">Base de Datos</p><progress max="100" value="90"></progress>
                </div>
            </div>
        </div>
    );
}
export default Acerca; 