import './Contact.css';
import github from './github.png';
function Contact(){
    return(

        <div className="contacto">
            <h2> ACERCA DE MI </h2>
            <hr/> 
            <p>
            Aprendiz Sena del programa ADSI con conocimientos en lenguajes de programación como JavaScript, Html, Php, Css y manejo de Base de Datos
            </p>
            <h2>CONTACTO</h2>
            <hr/> 
            <div className="info"><i class="fas fa-envelope"></i> splopez@misena.edu.co</div>
            <div className="info"><i class="fas fa-phone"></i> 3017148063</div>
            <div className="info"><i class="fas fa-street-view"></i>Carrera 79 #67-98</div>
            
            <h2>VALORES</h2>
            <hr/> 
            <div className="ref"><i class="fas fa-assistive-listening-systems"></i>Escuchar</div>
            
            <div className="ref"><i class="fab fa-angellist"></i>Honestidad</div>
            
            <div className="ref"><i class="fas fa-american-sign-language-interpreting"></i>Compañerismo</div>
            
            <h2>REPOSITORIO</h2>
            <hr/> 
            <div className="info"><i class="fab fa-github"></i><a href="https://github.com/Splope">https://github.com/Splope</a></div>

        </div>
    );
}

export default Contact;