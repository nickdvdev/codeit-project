import React from 'react';

export default class RegistrationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            username: '',
            countryId: '',
            birthDate: '',
            userLogin: '',
        }
    };

    onNameChange = (event) => {
        this.setState({ username: event.target.value })
    };

    onEmailChange = (event) => {
        this.setState({ email: event.target.value })
    };

    onPasswordChange = (event) => {
        this.setState({ password: event.target.value })
    };

    onSubmitSignIn = () => {
        fetch('http://localhost:3000/register', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                username: this.state.username,
                countryId: this.state.countryId,
                userLogin: this.state.userLogin,
                birthDate: this.state.birthDate,
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
                                    <label htmlFor="inputEmail4">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="inputEmail4"
                                        onChange={this.onEmailChange}
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputPassword4">Password</label>
                                    <input type="password" className="form-control" id="inputPassword4" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputAddress">Address</label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputAddress2">Address 2</label>
                                <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputCity">City</label>
                                    <input type="text" className="form-control" id="inputCity" />
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="inputState">State</label>
                                    <select id="inputState" className="form-control">
                                        <option selected>Choose...</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-2">
                                    <label htmlFor="inputZip">Zip</label>
                                    <input type="text" className="form-control" id="inputZip" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="gridCheck" />
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
