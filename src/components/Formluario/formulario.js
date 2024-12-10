import './formulario.css'
import CampoTexto from '../CampoTexto/CampoTexto'
const Formulario = () => {
    return <div className='formulario'>
        <form> 
            <h2> Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto titulo= 'Nombre' placeholder="Ingresa tu Nombre"/>
            <CampoTexto titulo = 'Puesto' placeholder="Ingresa tu puesto"/>
            <CampoTexto titulo = 'Equipo' placeholder="Ingresa tu equipo"/>


        </form>

    </div>
}

export default Formulario