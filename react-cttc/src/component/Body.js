import logo from '../asset/logo.svg';
import React from 'react';

class Body extends React.Component {
    constructor() {
        super();
        this.state = {
            msg: ''
        }
    }
    render () {
        return <div className="App-body">
            <div className="body-top-wrapper">
                <div className="body-logo-wrapper">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
            </div>
            <div className="body-main-wrapper">
                <div id="left-container" className="container">left content</div>
                <div id="main-container" className="container">
                    <div>{this.state.msg}</div>
                </div>
                <div id="right-container" className="container">right content</div>
            </div>
        </div>
    };

    componentDidMount() {
        fetch('/api/home', {
            method: 'GET'
        })
            .then((response) => {
                console.log(response);
                return response.text();
            })
        .then((response) => {

            this.setState({
                msg: response
            })
        });

    }
}

export default Body;