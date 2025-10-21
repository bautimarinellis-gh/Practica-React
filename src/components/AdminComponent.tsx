import './AdminComponent.css'

export const AdminComponent = () => {
    return (
        <div className="admin-container">
            <h1 className="admin-title">
                Panel de Administración
            </h1>
            <div className="admin-content">
                <h2 className="admin-subtitle">
                    Configuración del Sistema
                </h2>
                <ul className="admin-list">
                    <li className="admin-list-item">
                        Gestión de usuarios
                    </li>
                    <li className="admin-list-item">
                        Configuración de permisos
                    </li>
                    <li className="admin-list-item">
                        Reportes del sistema
                    </li>
                    <li className="admin-list-item">
                        Configuración de rutas
                    </li>
                    <li className="admin-list-item">
                        Logs de actividad
                    </li>
                </ul>
                <button className="admin-button">
                    Guardar Configuración
                </button>
            </div>
        </div>
    );
}