import React from 'react';

export default class Homepage extends React.Component {
    render() {
        const { onRouteChange } = this.props;
        return (
            <div className='container'>
                <h1>Homepage</h1>
                <div className='row justify-content-center'>
                    <div className='col-6'>
                        <div className="card">
                            <div className="card-body">
                                <h3>Profile Info</h3>
                                <p>Name: {this.props.username}</p>
                                <p>Email: {this.props.email}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <div className='col-6'>
                        <button
                            type="submit"
                            className="btn btn-outline-danger btn-lg btn-block"
                            onClick={() => onRouteChange('signout')}
                        >Log out</button>
                    </div>
                </div>
            </div>
        );
    }
}
