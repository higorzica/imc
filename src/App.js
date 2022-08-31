import { useState } from 'react';
import './app.css';
import swal from 'sweetalert';


export default function App() {
  const [peso,setPeso] = useState('');
  const [altura,setAltura] = useState('');

  function calcularIMC() {
    const alt = altura / 100;
    const imc = peso / (alt * alt);
    if (imc < 18.6) {
      swal({title:"Atenção!",
            text: "Você está abaixo do seu Peso! Seu IMC é : " + imc.toFixed(2),
            icon: "success"});
    }else if(imc >= 18.6 && imc < 24.9){
      swal({title:"Atenção!",
            text:"Você está no seu Peso Ideal! Seu IMC é : " + imc.toFixed(2),
            icon:"success"});
    }else if(imc >= 24.9 && imc < 34.9){
      swal({title:"Atenção!",
            text:"Você está levemente acima do seu Peso Ideal! Seu IMC é : " + imc.toFixed(2),
            icon: "info"});
    }else if(imc > 34.9){
      swal({title:"Atenção!",
            text:"Cuidado você está em estado de Obesidade! Seu IMC é : " + imc.toFixed(2),
            icon: "info"});
    }

  }

  return(
    <div className="app">
      <div className='brilho'>
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu imc </span>
      </div>


      <div className="area-input">
        <input type="text" placeholder="Peso em (kg) Ex:90 kg"
        value={peso}
        onChange={(e)=> setPeso(e.target.value)}>
        </input>
        <input type="text" placeholder="Altura em (cm) Ex:100 cm"
        value={altura}
        onChange={(e)=> setAltura(e.target.value)}>
        </input>

        <button onClick={calcularIMC}>
          Calcular
        </button>
      </div>

      <h2>
        Vamos descobrir como anda sua Saúde !
      </h2>

    </div>

    
  )
}