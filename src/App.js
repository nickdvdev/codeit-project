import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import SignInForm from './components/SignInForm/SignInForm';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import Homepage from './components/Homepage/Homepage';
import React from 'react';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      route: 'signin',
    };
  }

  onRouteChange = (route) => {
    this.setState({ route: route });
  };

  render() {
    return (
      <div className="App">
        <SignInForm />
        <RegistrationForm />
        <Homepage />
      </div>
    );
  }
}

export default App;
