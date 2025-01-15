import { useState } from 'react'
import './formulario.css'
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaOpciones from '../ListaOpciones/ListaOpciones'
import Btn from '../Button/Button'

const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState('')
    const [puesto, actualizarPuesto] = useState('')
    const [foto, actualizarFoto] = useState('')
    const [equipo, actulizarEquipo] = useState('')

    const [titulo, actulizarTitulo] = useState('')
    const [color, actuializarColor]= useState ('')

    const preventForm = (e)=>{
        e.preventDefault()
        console.log('Ya estamos previniendo el defecto')

        let datosAEnviar = {
            nombre : nombre,  //Lo que stamos aqui haciendo es guardar los vaores
                              //de los imputs en un objeto un objeto se abre con llaves y se asignan valores con dos puntos
            puesto : puesto,
            foto : foto,
            equipo
        }

        props.colaborador( datosAEnviar) //recibumos una funcion por medio de prpps donde se asiganran todos los obejtos que se creen 
    }

    const formEquipos = (e) => {
        e.preventDefault()
        props.nevoForm({titulo, colorPrimario: color})
    }

    return <div className='formulario'>
        <form onSubmit={preventForm}> 
            <h2> Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto 
                titulo= 'Nombre' 
                placeholder="Ingresa tu Nombre" 
                required={true}
                valor = {nombre}
                actualizarValor = {actualizarNombre}
            /> {/* La prop required se le manda el parametro true para indicar que sea verdadera la requisicion obligatoria  */} 

            <CampoTexto 
                titulo = 'Puesto' 
                placeholder="Ingresa tu puesto" 
                required
                valor = {puesto}
                actualizarValor = {actualizarPuesto}
            /> {/* No es necesario amdar el true ya que sin eso por sis olo es verdadera */}
            <CampoTexto 
                titulo = 'Foto' 
                placeholder="Ingresa tu Foto" 
                required
                valor = {foto}
                actualizarValor = {actualizarFoto}
            />
            <ListaOpciones 
                valor = {equipo}
                actualizarEquipo = {actulizarEquipo}
                equipo = {props.equipo} /* aqui estamos recibiendo la inofrmaion que mandamos mediante props de app */
            />
            <Btn texto ='Crear'/>      
      

        </form>

        <form onSubmit={formEquipos}> 
            <h2> Rellena el formulario para crear el equipo.</h2>
            <CampoTexto 
                titulo= 'Equipo' 
                placeholder="Ingresa tu Equipo" 
                required={true}
                valor = {titulo}
                actualizarValor = {actulizarTitulo}
            /> {/* La prop required se le manda el parametro true para indicar que sea verdadera la requisicion obligatoria  */} 

            <CampoTexto 
                titulo = 'Color' 
                placeholder="Ingresa tu color en HEX" 
                required
                valor = {color}
                actualizarValor = {actuializarColor}
            />
             <Btn texto ='Añadir equipo'/> 
        </form>

    </div>
}

export default Formulario