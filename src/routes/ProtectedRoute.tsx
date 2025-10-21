import { Navigate } from 'react-router-dom';
import type { ReactNode } from 'react';

interface ProtectedRouteProps {
    children: ReactNode;
    redirectTo?: string;
}

/**
 * Componente que protege rutas que requieren autenticación
 * Si el usuario no está autenticado, redirige a la página especificada
 */
export const ProtectedRoute = ({ 
    children, 
    redirectTo = "/" 
}: ProtectedRouteProps) => {
    //Se simula que el usuario está autenticado
    const isAuthenticated = false; // Cambiar a true para probar que permite acceder a la ruta
    
    if (!isAuthenticated) {
        return <Navigate to={redirectTo} replace />;
    }
    
    return <>{children}</>;
};

