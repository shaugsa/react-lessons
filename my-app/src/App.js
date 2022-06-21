import logo from './logo.svg';
import './App.css';
import Clock from './components/Clock';
import Toggle from './components/Toggle';
import LoginControl from './components/LoginControl';
import PropsItems from './components/PropsItems';
import NameForm from './components/NameForm';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function App() {
  return (
    <div>
      <Clock />
      <Toggle />
      <LoginControl />
      <PropsItems numbers={numbers} />
      <NameForm />
    </div>
  );
}

export default App;
