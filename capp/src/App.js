import logo from './logo.svg';
import './App.css';
import LoginButton from './components/LoginButton/LoginButton';
import LogoutButton from './components/LogoutButton/LogoutButton';


function App() {
  return (
    <div className="App">
      <LoginButton></LoginButton>
      <LogoutButton></LogoutButton>
    </div>
  );
}

export default App;
