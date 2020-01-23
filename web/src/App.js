import React, { useEffect, useState } from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';


// Componente: Bloco isolado de HTML, CSS e JS, o qual não intefere no restante da aplicação / Função que retorna um conteudo HTML ou CSS
// Propriedade: Informações que um componente PAI passa para o componente FILHO / O mesmo que o Atributo em HTML
// Estado: Informações mantidas pelo componente (Lembrar: imutabilidade)

function App() {
const [github_username, setGithubUsername] = useState('');
const [techs, setTechs] = useState('');
const [latitude, setLatitude] = useState('');
const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    )
  }, []);

  async function handleAddDev(e) {
    e.preventDefault();
    
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
          <div className="input-block">
            <label htmlFor="github_username">Usuário Github</label>
            <input 
              name="github_username" 
              id="username_github" 
              required
              value={github_username}
              onChange={e => setGithubUsername(e.target.value)}
            />
          </div>
         
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input
              name="techs" 
              id="techs" 
              required
              value={techs}
              onChange={e => setTechs(e.target.value)}
            />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input 
                type="number" 
                name="latitude" 
                id="latitude" 
                required 
                value={latitude} 
                onChange={e => setLatitude(e.target.value)}  
              />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input 
                type="number" 
                name="longitude" 
                id="longitude" 
                required 
                value={longitude}
                onChange={e => setLongitude(e.target.value)}
              />
            </div>
          </div>
          
          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/26663707?s=460&v=4" alt="Fabricio Braga"/>
              <div className="user-info">
                <strong>Fabricio Braga</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Engineer, Marketing Specialist, now undergraduate student in Computer Science.</p>
            <a href="https://github.com/bragafabricio">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/26663707?s=460&v=4" alt="Fabricio Braga"/>
              <div className="user-info">
                <strong>Fabricio Braga</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Engineer, Marketing Specialist, now undergraduate student in Computer Science.</p>
            <a href="https://github.com/bragafabricio">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/26663707?s=460&v=4" alt="Fabricio Braga"/>
              <div className="user-info">
                <strong>Fabricio Braga</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Engineer, Marketing Specialist, now undergraduate student in Computer Science.</p>
            <a href="https://github.com/bragafabricio">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>

    </div>

  );
}

export default App;
