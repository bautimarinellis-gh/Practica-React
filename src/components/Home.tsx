import './Home.css'

export const Home = () => {
    return (
        <div className="home-container">
            <h1 className="home-title">
                Bienvenido a Mi App
            </h1>
            <p className="home-subtitle">
                Selecciona una opción del menú de navegación para comenzar
            </p>
            <div className="home-card">
                <h2>React Router - Modo Declarative</h2>
                <p>Esta aplicación usa React Router en modo declarativo</p>
            </div>
        </div>
    )
}

