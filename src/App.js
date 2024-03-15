import { useState } from 'react';
import {FiSearch} from 'react-icons/fi'
import './styles.css';

import api from './service/api';

function App() {

  const [input, setInput] = useState('')


  async function handleSearch(){
    // 01001000/json/

    if(input === ''){
      alert("Preencha algum CEP!")
      return;
    }

    try{
      const response = await api.get(`${input}/json`);
      console.log(response)

    }catch{
      alert("Ops erro ao digitar");
    }

  }

  return (
    <div className="container">
    <h1 className="title">Buscador CEP</h1>

    <div className="containerInput">
    <input
    type="text"
    placeholder="Digite seu CEP..."
    value={input}
    onChange={(e) => setInput(e.target.value) }
    />

    <button className="buttonSearch" onClick={handleSearch}>
      <FiSearch size={25} color="#FFF"/>
    </button>
    </div>

    <main className="main">
      <h2>CEP: 79003222</h2>

      <span>Rua: Gurucaia</span>
      <span>Complemento: Casa</span>
      <span>Residêncial Ipê</span>
      <span>Naviraí - MS</span>

    </main>

    </div>
  );
}

export default App;
