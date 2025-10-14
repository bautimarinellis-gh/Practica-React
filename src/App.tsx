import { useState, useEffect } from 'react'
import './App.css'
import { Alumno } from './components/Card'
import { fetchUser } from './services/userService'
import type { User } from './types/user'

function App() {
  const [usuarios, setUsuarios] = useState<User[]>([])

  useEffect(() => {
    const cargarUsuarios = async () => {
      const usuariosObtenidos = await fetchUser()
      setUsuarios(usuariosObtenidos)
    }
    cargarUsuarios()
  }, [])

  const alumnosPresentes = usuarios.length;

  return (
    <div className="app-container">
      <div className="app-content">
        <div className="app-header">
          <h1 className="app-title">
            Lista de Asistencia
          </h1>
          <p className="app-subtitle">
            Total de alumnos: <strong>{alumnosPresentes}</strong>
          </p>
          <div className="app-divider"></div>
        </div>

        <div className="alumnos-list">
          {usuarios.map((usuario) => (
            <Alumno key={usuario.id} nombre={usuario.name} presente={false} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
