import './App.css';
import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario';

function App() {


  return (
    <div>
     
      <Header/>   {/* Forma recomendada de llamar un component  */}      
    <Formulario/>
       {/* En react, en el App todo codigo JS va encerrado entre {} */}
      


    </div>
  );
}

export default App;
