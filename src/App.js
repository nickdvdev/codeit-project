import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from './components/Navigation/Navigation';
import SignInForm from './components/SignInForm/SignInForm';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';


function App() {
  return (
    <div className="App">
      <Navigation />
      <SignInForm />
      <RegistrationForm />
    </div>
  );
}

export default App;
