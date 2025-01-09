import './colaboradores.css'
import { AiFillCloseCircle } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

const Colaboradores = (props) =>{

    const{nombre,puesto,foto,equipo} = props.datos
    const{colorPrimario,eliminarColaborador} = props


    return <div className='colaborador'>
        <AiFillCloseCircle className='eliminar' onClick={eliminarColaborador}/>
        <div className='encabezado' style={{backgroundColor:colorPrimario}}>
            <img src={foto} alt='imagen de perfil'></img>
        </div>
        <div className='info'>
            <h2>{nombre}</h2>
            <p>{puesto}</p>
        </div>
    </div>
}

export default Colaboradores