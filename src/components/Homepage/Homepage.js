import React from 'react';

export default class Homepage extends React.Component {
    render() {
        return (
            <div className='container'>
                <h1>Homepage</h1>
                <div className='row justify-content-center'>
                    <div className='col-6'>
                        <div className="card">
                            <div className="card-body">
                                This is some text within a card body.
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <div className='col-6'>
                        <button type="submit" className="btn btn-outline-danger btn-lg btn-block">Log out</button>
                    </div>
                </div>
            </div>
        );
    }
}
