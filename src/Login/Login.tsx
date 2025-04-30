import React, { useState } from 'react';
import { Eye, EyeOff} from 'lucide-react';
import { ResponseLogin } from '../Mocks/login';
import { useNavigate } from 'react-router-dom';
import CapysLogo from '../Components/CapysLogo';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const response = ResponseLogin({ Email: email, Senha: password });

    if (response.status === 200) {
      navigate("/home");
    } else {
      setError("Email ou senha inválidos.");
    }
  };


  return (
    <div className="login-container">
      <CapysLogo />
      
      
      <div className="login-form-container">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <div className="password-input-container">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              className="form-input"
              required
            />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Senha
            </label>
            <div className="password-input-container">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-input"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="password-toggle-button"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {error && <p className="error-message">{error}</p>}

          <button
            type="submit"
            className="submit-button"
          >
            Entrar
          </button>
        </form>

        <div className="signup-section">
          <p className="signup-text">
            Ainda não possui uma conta?
          </p>
          <button className="signup-button">
            Cadastre-se
          </button>
        </div>
      </div>
    </div>
  );
};


export default Login;