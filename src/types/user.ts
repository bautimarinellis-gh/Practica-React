export type UserRole = 'USER' | 'ADMIN' | 'MODERATOR';

export interface User {
    id: number,
    name: string,
    username: string,
    email: string,
    role?: UserRole  // Opcional: rol del usuario
}