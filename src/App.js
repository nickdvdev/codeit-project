import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import SignInForm from './components/SignInForm/SignInForm';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import Homepage from './components/Homepage/Homepage';
import React from 'react';


const initialState = {
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    username: '',
    email: '',
    userLogin: '',
    birthDate: '',
    countryId: '',
  }
};

class App extends React.Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        username: data.username,
        email: data.email,
        userLogin: data.userLogin,
        birthDate: data.birthDate,
        countryId: data.countryId,
      }
    })
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState)
    } else if (route === 'home') {
      this.setState({ isSignedIn: true })
    }
    this.setState({ route: route });
  };

  render() {
    const { route } = this.state;

    return (
      <div className="App App-header">
        { route === 'home'
          ? <Homepage
            name={this.state.user.username}
            email={this.state.user.email}
            isSignedIn={this.state.isSignedIn}
          />
          : (
            route === 'signin'
              ? <SignInForm loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
              : <RegistrationForm loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
          )
        }
      </div>
    );
  }
}

export default App;
