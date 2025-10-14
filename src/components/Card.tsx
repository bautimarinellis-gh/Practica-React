import { useState } from "react";
import "./Card.css";

interface AlumnoProps {
    nombre: string,
    presente: boolean
}

export const Alumno = ({ nombre, presente }: AlumnoProps) => {
    const [estaPresente, setEstaPresente] = useState(presente);
    
    return (
        <div 
            className={`alumno-card ${estaPresente ? "presente" : "ausente"}`}
            onClick={() => setEstaPresente(!estaPresente)}
        >
            <div className="alumno-content">
                <div>
                    <h3 className="alumno-nombre">
                        {nombre}
                    </h3>
                </div>
                <div className={`alumno-estado ${estaPresente ? "presente" : "ausente"}`}>
                    {estaPresente ? "Presente" : "Ausente"}
                </div>
            </div>
        </div>
    )
}