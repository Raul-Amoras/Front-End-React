import React, { useState } from 'react'
import Header from './components/Header'

import backgroudImg from './assets/backgroud.jfif'

import './styles/style.css'

export default function App() {
  const [projects, setProjects] = useState(['HTML', 'CSS'])

  function novoProjeto() {
    //projects.push(`projet ${Date.now()}`)
    setProjects([...projects, `Project ${Date.now()}`])
    console.log(projects)
  }

  return (
    <>
      <Header title="Projects">
        <img className="img" src={backgroudImg} alt="imagem de um lugar" />
        <ul>
          {projects.map(project => (
            <li key={project}>{project}</li>
          ))}
        </ul>
        <button onClick={novoProjeto}>Novo Projeto</button>
      </Header>
    </>
  )
}
