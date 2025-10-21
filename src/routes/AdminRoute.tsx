import { Navigate } from 'react-router-dom';
import type { ReactNode } from 'react';

interface AdminRouteProps {
    children: ReactNode;
    redirectTo?: string;
}

/**
 * Componente que protege rutas que requieren permisos de administrador
 * Si el usuario no es admin, redirige a la página especificada
 */
export const AdminRoute = ({ 
    children, 
    redirectTo = "/dashboard" 
}: AdminRouteProps) => {
    // Se simula que el usuario es admin
    const isAuthenticated = true;
    const isAdmin = false; // Cambiar a false para probar que no permite acceder a la ruta
    
    if (!isAuthenticated) {
        return <Navigate to="/" replace />;
    }
    
    if (!isAdmin) {
        return <Navigate to={redirectTo} replace />;
    }
    
    return <>{children}</>;
};

