import React, {Component} from 'react';
import {connect} from 'react-redux';
import {breakChange} from '../actions/index';

const mapStateToProps = state => {
    return {break: state.break};
};

function mapDispatchToProps(dispatch) {
    return {
        breakChange: change => dispatch(breakChange(change))
    };
}


class ConnectedBreak extends Component {
    handleDecrease = () => {
        this.props.breakChange(-1);
    }

    handleIncrease = () => {
        this.props.breakChange(1);
    }

    render() {
        return (
            <div id='break-timer'>
                <button id='break-decrement' onClick={this.handleDecrease}>
                    Decrease Break
                </button>
                <div id='break-label'>
                    Break Length
                </div>
                <div id='break-length'>
                    {this.props.break}
                </div>
                <button id='break-increment' onClick={this.handleIncrease}>
                    Increase Break
                </button>
            </div>
        )
    }
}

const BreakTimer = connect(mapStateToProps, mapDispatchToProps)(ConnectedBreak);

export default BreakTimer;