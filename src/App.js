import React, { useEffect, useState } from 'react'
import Header from './components/Header'

import api from './services/api'

import './styles/style.css'

export default function App() {
  const [projects, setProjects] = useState(['HTML', 'CSS'])

  function novoProjeto() {
    //projects.push(`projet ${Date.now()}`)
    setProjects([...projects, `Project ${Date.now()}`])

    useEffect(() => {
      api.get('projects').then(response => {
        console.log(response)
      })
    }, [])
  }

  return (
    <>
      <Header title="Projects">
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
