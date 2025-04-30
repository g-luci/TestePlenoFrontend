import React from "react";
import { useNavigate } from "react-router-dom"; 
import './Home.css';

const Home = () => {

  const navigate = useNavigate(); 
  const handleLogout = () => {
    
    navigate('/login');
  };
  return (
    <div className="app-container">
      <header className="header">
        <div className="capys-logo-home">
        <img src="src/Assets/CapysLogo.png" alt="Capys Logo"  />
        </div>
        <button className="exit-button" onClick={handleLogout}>Sair</button>
      </header>
      
      <div className="welcome-container"> 
        <h2 className="welcome-message">Olá, Teste Capys</h2>
        <div className="developer-info">Desenvolvedor Front-End</div>
      </div>
      
      <main className="main-content">
        <h2 className="development-message">Que pena! Estamos em desenvolvimento :(</h2>
        <p className="development-details">Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
      </main>
    </div>
  );
};


export default Home;
