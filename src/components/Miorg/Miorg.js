import './Miorg.css'
import { useState } from 'react' //La sintaxi de esta 'libreria' es la siguiente
// const [NombreDeVariable, FuncionActualiza] = useState(valorIncial) RECUERDA es casi igual a una variable (cajita) pero con demas datos, lleva su nombre y su valor 
const MiOrg = (props) =>{


   /*  const [calcamonia, actualizarCalcamonia] = useState(true);

    /* const manejarClick = () =>{
        console.log( 'hola este es un mensaje', calcamonia);

        actualizarCalcamonia(!calcamonia);
    } */


    return <section className='mi-org'>
        <h2 className='title'>Mi organizacion</h2>
        <img src='./img/BtnOrg.png' onClick={props.cambiarMostrar} alt='BtnOrg'></img>
    </section>
}

export default MiOrg