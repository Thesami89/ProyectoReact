import './formulario.css'
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaOpciones from '../ListaOpciones/ListaOpciones'
import Btn from '../Button/Button'

const Formulario = () => {

    const preventForm = (e)=>{
        e.preventDefault()
        console.log('Ya estamos previniendo el defecto', e)
    }

    return <div className='formulario'>
        <form onSubmit={preventForm}> 
            <h2> Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto titulo= 'Nombre' placeholder="Ingresa tu Nombre"/>
            <CampoTexto titulo = 'Puesto' placeholder="Ingresa tu puesto"/>
            <CampoTexto titulo = 'Equipo' placeholder="Ingresa tu equipo"/>
            <ListaOpciones />
            <Btn texto ='Crear'/> 


        </form>

    </div>
}

export default Formulario