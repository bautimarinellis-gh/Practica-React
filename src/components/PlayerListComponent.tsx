import { useState, useEffect } from 'react'
import type { User } from "../types/user";
import { fetchUser } from '../services/userService';
import './PlayerListComponent.css'

export const PlayerListComponent = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadUsers = async () => {
            setLoading(true);
            const data = await fetchUser();
            setUsers(data);
            setLoading(false);
        };
        loadUsers();
    }, []);

    if (loading) {
        return (
            <div className="players-loading">
                <h2>Cargando jugadores...</h2>
            </div>
        );
    }

    return (
        <div className="players-container">
            <h1 className="players-title">
                Lista de Jugadores
            </h1>
            <div>
                <ol className="players-list">
                    {users.map((user: User) => (
                        <li 
                            key={user.id} 
                            onClick={() => console.log(user.name)}
                            className="player-item"
                        >
                            <span className="player-name">{user.name}</span> - {user.email}
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
}