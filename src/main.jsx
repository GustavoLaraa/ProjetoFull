import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FipeProvider } from './contexts/FipeContext';
import Formulario from './components/Formulario';
import Resultado from './components/Resultado';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FipeProvider>
      <div className="min-vh-100 py-5" style={{ backgroundColor: '#f4f7f9' }}>
        <div className="container" style={{ maxWidth: '650px' }}>
          <header className="text-center mb-4">
            <h1 className="fw-bold mb-1" style={{ color: '#002f5d', fontSize: '2.5rem' }}>
              Tabela Fipe
            </h1>
            <p className="text-secondary fw-semibold">
              Consulte o valor médio de veículos de forma gratuita
            </p>
            <div
              className="mx-auto mt-2"
              style={{ height: '4px', width: '60px', backgroundColor: '#00a1df', borderRadius: '2px' }}
            />
          </header>

          <main>
            <Formulario />
            <Resultado />
          </main>

          <footer className="text-center mt-5 text-muted small">
            <p>© {new Date().getFullYear()} - Dados baseados na API da Tabela Fipe</p>
          </footer>
        </div>
      </div>
    </FipeProvider>
  </React.StrictMode>,
);
