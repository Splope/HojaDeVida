import {
    Link
  } from "react-router-dom";
  
function Error404(){
    return(
    <div className="container">
     Error 404 Estás intentando acceder a una página que no sirve
     <Link to="/" >Ir a la pagina de inicio</Link>  
    </div>
    );
} 

export default Error404;