// server.js
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');

// Configuración del servidor
const app = express();
app.use(express.json()); // Para parsear JSON
app.use(cors()); // Permitir solicitudes desde el frontend

// Simulación de base de datos (en un proyecto real, usarías una DB)
const users = [
    {
        id: 1,
        email: 'user@example.com',
        password: bcrypt.hashSync('password123', 10) // Contraseña encriptada
    }
];

// Clave secreta para JWT (en un entorno real, esto debe estar en una variable de entorno)
const JWT_SECRET = 'mi_super_secreto';

// Ruta de autenticación (login)
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    // Buscar al usuario en la "base de datos"
    const user = users.find(u => u.email === email);
    if (!user) {
        return res.status(400).json({ message: 'Usuario no encontrado' });
    }

    // Verificar la contraseña
    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ message: 'Contraseña incorrecta' });
    }

    // Generar el token JWT
    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });

    res.json({ message: 'Inicio de sesión exitoso', token });
});

// Middleware para proteger rutas
const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(403).json({ message: 'Token requerido' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(403).json({ message: 'Token inválido' });
    }
};

// Ruta protegida de ejemplo
app.get('/api/protected', authMiddleware, (req, res) => {
    res.json({ message: 'Ruta protegida', user: req.user });
});

// Inicializar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
