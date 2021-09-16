import foto from './foto.jpg';
import './Header.css'
function Header(){
    return (
        <header>
        <div className="foto">
        <img src={foto} alt="foto Sara López" />
        </div>
        <div className="texto">
        <h1> <span className="nombre"> SARA</span>  LÓPEZ </h1> 
        <h3>ANALISTA Y DESARROLLADORA DE SISTEMAS DE INFORMACIÓN</h3>

        </div>
        </header>

    );
}

export default Header;