import React from 'react';

export default class SignInForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			signInEmail: '',
			signInPassword: ''
		}
	};

	onEmailChange = (event) => {
		this.setState({ signInEmail: event.target.value })
	};

	onPasswordChange = (event) => {
		this.setState({ signInPassword: event.target.value })
	};

	onSubmitSignIn = () => {
		fetch('http://localhost:3000/signin', {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				email: this.state.signInEmail,
				password: this.state.signInPassword
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
		const { onRouteChange } = this.props;
		return (
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col-6'>
						<h1>Sign In Form</h1>
						<form>
							<div className='form-group'>
								<label htmlFor='exampleInputEmail1'>Email/Login</label>
								<input
									type='email'
									className='form-control'
									id='exampleInputEmail1'
									aria-describedby='emailHelp'
									onChange={this.onEmailChange}
								/>
								<small
									id='emailHelp'
									className='form-text text-muted'>
									We'll never share your email with anyone else.
								</small>
							</div>
							<div className='form-group'>
								<label htmlFor='exampleInputPassword1'>Password</label>
								<input
									type='password'
									className='form-control'
									id='exampleInputPassword1'
									onChange={this.onPasswordChange}
								/>
							</div>
							<button
								type='submit'
								className='btn btn-outline-primary btn-lg btn-block'
								onClick={this.onSubmitSignIn}
							>Sign In
							</button>
							<button
								type='submit'
								className='btn btn-outline-info btn-lg btn-block'
								onClick={() => onRouteChange('register')}
							>Register
							</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}
