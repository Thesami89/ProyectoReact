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
            <CampoTexto titulo= 'Nombre' placeholder="Ingresa tu Nombre" required={true}/> {/* La prop required se le manda el parametro true para indicar que sea verdadera la requisicion obligatoria  */} 
            <CampoTexto titulo = 'Puesto' placeholder="Ingresa tu puesto" required/> {/* No es necesario amdar el true ya que sin eso por sis olo es verdadera */}
            <CampoTexto titulo = 'Foto' placeholder="Ingresa tu Foto" required/>
            <ListaOpciones />
            <Btn texto ='Crear'/>      
      

        </form>

    </div>
}

export default Formulario