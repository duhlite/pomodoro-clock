import React, {Component} from 'react';
import { clearSession, countDown } from "../actions/index";
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        session: state.session,
        sessiontime: state.sessiontime,
        timelabel: state.timelabel,
        breaktime: state.breaktime
    };
};

function mapDispatchToProps(dispatch) {
    return {
        clearSession:clear => dispatch(clearSession(clear)),
        countDown:count => dispatch(countDown(count))
    };
};

class ConnectedTimer extends Component {
    constructor() {
        super();
        this.state = {
            play: false
        }
    }
    

    handleReset = () => {
        const clear = 'clear';
        this.props.clearSession(clear);
    };

    handleClick = () => {
        this.setState({play: !this.state.play});
        console.log(this.state.play);
        if(this.state.play === true) {
            setInterval(
                function() {
                    this.props.countDown(1000)
                }, 1000
            );
        } else {
            this.props.countDown(0);
        }
    }

    render() {
        return(
            <div>
                <div id='timer-label'>
                    {this.props.timelabel} 
                </div>
                <div id='time-left'>
                    {this.props.sessiontime}
                </div>
                <button id='start_stop' onClick={this.handleClick}>
                    Start/Stop
                </button>
                <button id='reset' onClick={this.handleReset}>
                    Reset
                </button>
            </div>
        )
    }
}

const Timer = connect(mapStateToProps,mapDispatchToProps)(ConnectedTimer)

export default Timer;