// LoggingFront.tsx
import React, { useState } from 'react';
import './LoggingFront.css'; // Importamos los estilos

const LoggingFrontSimul: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                setError(data.message);
            } else {
                // Guardar el token en el localStorage o manejarlo como prefieras
                localStorage.setItem('token', data.token);
                alert('Inicio de sesión exitoso');
            }
        } catch (err) {
            console.error('Error durante la autenticación', err);
            setError('Error de servidor');
        }
    };

    return (
        <div className="login-container">
            <div className="login-image">
                <img src={require('../Images/loggOp3.jpeg')} alt="Logo" />
            </div>
            <div className="login-form-container">
                <h2>Inicia sesión para continuar tu experiencia de aprendizaje</h2>
                <form onSubmit={handleLogin}>
                    <input
                        type="email"
                        placeholder="Correo electrónico o nombre de usuario"
                        className="login-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Contraseña"
                        className="login-input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <button type="submit" className="login-button">
                        Iniciar Sesión
                    </button>
                </form>
                <hr />
                <div className="social-login">
                    <p>Otras opciones de inicio de sesión</p>
                    <div className="social-buttons">
                        <button className="social-btn google">G</button>
                        <button className="social-btn facebook">f</button>
                        <button className="social-btn apple"></button>
                    </div>
                </div>
                <div className="signup-options">
                    <p>¿No tienes una cuenta? <a href="#">Regístrate</a></p>
                    <p><a href="#">Inicia sesión con tu organización</a></p>
                </div>
            </div>
        </div>
    );
};

export default LoggingFrontSimul;
