
import Header from './components/header/header';
import Formulario from './components/Formluario/formulario';
import MiOrg from './components/Miorg/Miorg';
import { useState } from 'react';

function App() {
  
  const [mostrarFormlulario, actualizarMostrar] = useState(true);

  const cambiarMostrar = () =>{
    actualizarMostrar(!mostrarFormlulario) //Lo que hacemos es que la funcion actuializar actualiza el valor de la cajita y nosotros le  mnadamos el nuevo rsultuado
  }

  //Recordatorio: operador ternario = Ternario = condicion ? Mostrar : NoMostrar
  //Tambien se puede representar de la forma de condicion && mostrar

  return (
    <div>
      
      <Header />
      {/* {mostrarFormlulario == true ? <Formulario/> : <div></div>} */}
      {mostrarFormlulario && <Formulario/> }
      <MiOrg cambiarMostrar = {cambiarMostrar}/> {/* Las funciones se pueden mandar por medio de props con la siguiente sintaxis que se muestra ennpanatalla  */}

      
      
    </div>
  );
}

export default App;
