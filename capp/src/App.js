import logo from './logo.svg';
import './App.css';
import LoginButton from './components/LoginButton/LoginButton';
import LogoutButton from './components/LogoutButton/LogoutButton';
import Profile from './components/Profile/Profile';


function App() {
  return (
    <div className="App">
      <LoginButton></LoginButton>
      <Profile></Profile>
      <LogoutButton></LogoutButton>
    </div>
  );
}

export default App;
