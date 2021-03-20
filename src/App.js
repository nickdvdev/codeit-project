import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from './components/Navigation/Navigation';
import SignInForm from './components/SignInForm/SignInForm';


function App() {
  return (
    <div className="App">
      <Navigation />
      <SignInForm />
    </div>
  );
}

export default App;
