import React from 'react';
import LoggingFrontSimul from './Logging/LoggingFrontSimul'; // Importar LoggingFront

export const App: React.FC = () => {
    return (
        <div>
            <LoggingFrontSimul /> {/* Mostrar la pantalla de Logging */}
        </div>
    );
}

export default App;
