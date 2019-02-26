import React, {Component} from 'react';
import {connect} from 'react-redux';
import {sessionChange} from '../actions/index';

const mapStateToProps = state => {
    return {session: state.session};
};

function mapDispatchToProps(dispatch) {
    return {
        sessionChange: change => dispatch(sessionChange(change))
    };
}


class ConnectedSession extends Component {
    handleDecrease = () => {
        this.props.sessionChange(-1);
    }

    handleIncrease = () => {
        this.props.sessionChange(1);
    }

    render() {
        return (
            <div id='session-timer'>
                <button id='session-decrement' onClick={this.handleDecrease}>
                    Decrease Session
                </button>
                <div id='session-label'>
                    Session Length
                </div>
                <div id='session-length'>
                    {this.props.session}
                </div>
                <button id='session-increment' onClick={this.handleIncrease}>
                    Increase Session
                </button>
            </div>
        )
    }
}

const SessionTimer = connect(mapStateToProps, mapDispatchToProps)(ConnectedSession);

export default SessionTimer;