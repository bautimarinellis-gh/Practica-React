import './DashboardComponent.css'

export const DashboardComponent = () => {
    return (
        <div className="dashboard-container">
            <h1 className="dashboard-title">
                Dashboard
            </h1>
            <div className="dashboard-grid">
                <div className="dashboard-card dashboard-card-purple">
                    <h3>Total Usuarios</h3>
                    <p>10</p>
                </div>
                <div className="dashboard-card dashboard-card-pink">
                    <h3>Jugadores Activos</h3>
                    <p>8</p>
                </div>
                <div className="dashboard-card dashboard-card-blue">
                    <h3>Partidas Hoy</h3>
                    <p>15</p>
                </div>
            </div>
        </div>
    );
}