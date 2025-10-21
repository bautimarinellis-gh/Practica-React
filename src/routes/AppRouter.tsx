import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../components/Home';
import { PlayerListComponent } from '../components/PlayerListComponent';
import { DashboardComponent } from '../components/DashboardComonent';
import { AdminComponent } from '../components/AdminComponent';
import { ProtectedRoute } from './ProtectedRoute';
import { AdminRoute } from './AdminRoute';


export const AppRouter = () => {
    return (
        <Routes>
            {/* Cualquier usuario puede acceder sin autenticación */}
            
            <Route path="/" element={<Home />} />
            <Route path="/players" element={<PlayerListComponent />} />
            
            {/* Requieren autenticación básica */}
            
            <Route 
                path="/dashboard" 
                element={
                    <ProtectedRoute>
                        <DashboardComponent />
                    </ProtectedRoute>
                } 
            />
            
            {/* Requieren permisos de administrador */}
            
            <Route 
                path="/admin" 
                element={
                    <AdminRoute>
                        <AdminComponent />
                    </AdminRoute>
                } 
            />
            
            {/* ========== RUTA 404 ========== */}
            {/* Cualquier ruta no definida redirige a home */}
            
            <Route path="*" element={
                <div style={{ padding: '2rem', textAlign: 'center' }}>
                    <h1>404 - Página no encontrada</h1>
                    <p>La página que buscas no existe.</p>
                    <Navigate to="/" replace />
                </div>
            } />
        </Routes>
    );
};

