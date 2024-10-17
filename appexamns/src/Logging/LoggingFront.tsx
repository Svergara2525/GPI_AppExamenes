// LoggingFront.tsx
import React from 'react';
import './LoggingFront.css'; // Importamos los estilos

const LoggingFront: React.FC = () => {
    return (
        <div className="login-container">
            <div className="login-image">
                {/* Aquí puedes poner cualquier imagen o logo */}
                <img src={require('../Images/loggOp3.jpeg')} alt="Logo" />
            </div>
            <div className="login-form-container">
                <h2>Inicia sesión para continuar tu experiencia de aprendizaje</h2>
                <form>
                    <input
                        type="email"
                        placeholder="Correo electrónico o nombre de usuario"
                        className="login-input"
                    />
                    <input
                        type="password" // Tipo para la entrada de contraseña
                        placeholder="Contraseña"
                        className="login-input"
                    />
                    <button className="login-button">
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

export default LoggingFront;
