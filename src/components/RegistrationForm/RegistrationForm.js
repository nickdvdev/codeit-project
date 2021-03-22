import React from 'react';

export default class RegistrationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            userLogin: '',
            email: '',
            password: '',
            birthDate: '',
            countryId: '',
        }
    };

    onNameChange = (event) => {
        this.setState({ username: event.target.value })
    };

    onLoginChange = (event) => {
        this.setState({ userLogin: event.target.value })
    };

    onEmailChange = (event) => {
        this.setState({ email: event.target.value })
    };

    onPasswordChange = (event) => {
        this.setState({ password: event.target.value })
    };

    onBirthDateChange = (event) => {
        this.setState({ birthDate: event.target.value })
    };

    onCountryChange = (event) => {
        this.setState({ countryId: event.target.value })
    };

    onSubmitSignIn = () => {
        fetch('http://localhost:3000/register', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: this.state.username,
                userLogin: this.state.userLogin,
                email: this.state.email,
                password: this.state.password,
                birthDate: new Date(this.state.birthDate)
                    .toISOString()
                    .slice(0, 19)
                    .replace('T', ' '),
                countryId: this.state.countryId,
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user.id) {
                    this.props.loadUser(user)
                    this.props.onRouteChange('home');
                }
            })
    };

    render() {
        return (
            <div className='container'>
                <h1>Registration Form</h1>
                <div className='row justify-content-center'>
                    <div className='col-6'>
                        <form>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="userName4">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="userName4"
                                        onChange={this.onNameChange}
                                        placeholder="Your name"
                                        required
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputUserLogin4">Login</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputUserLogin4"
                                        onChange={this.onLoginChange}
                                        placeholder="Your login"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputEmail4">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="inputEmail4"
                                        onChange={this.onEmailChange}
                                        placeholder="Enter email"
                                        required
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputPassword4">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="inputPassword4"
                                        onChange={this.onPasswordChange}
                                        placeholder="Enter password"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputBirthDate">Birth Date</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="inputBirthDate"
                                        onChange={this.onBirthDateChange}
                                        placeholder="Choose birth date"
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputCountry">Country</label>
                                    <select
                                        id="inputCountry"
                                        className="form-control"
                                        onChange={this.onCountryChange}
                                        placeholder="Choose country"
                                        required
                                    >
                                        <option value="1">Russia</option>
                                        <option value="2">Ukraine</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="gridCheck"
                                        required
                                    />
                                    <label className="form-check-label" htmlFor="gridCheck">
                                        I agree to terms and conditions
                                    </label>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-outline-primary btn-lg btn-block"
                                onClick={this.onSubmitSignIn}
                            >Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
