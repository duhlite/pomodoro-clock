import React, {Component} from 'react';
import { clearSession, countDown, stopTimer, breakTime } from "../actions/index";
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        session: state.session,
        sessiontime: state.sessiontime,
        timelabel: state.timelabel,
        breaktime: state.breaktime,
        currenttime: state.currenttime
    };
};

function mapDispatchToProps(dispatch) {
    return {
        clearSession:clear => dispatch(clearSession(clear)),
        countDown:count => dispatch(countDown(count)),
        stopTimer:stop => dispatch(stopTimer(stop)),
        breakTime:change => dispatch(breakTime(change))
    };
};

class ConnectedTimer extends Component {
    constructor() {
        super();
        this.state = {
            play: false,
        }
    }

    handleReset = () => {
        clearInterval(this.timer)
        const clear = 'clear';
        this.props.clearSession(clear);
    };

    handleClick = () => {
        this.setState({play: !this.state.play}, () => {
            this.state.play ? 
                this.timer=setInterval(
                    () => {
                        this.props.countDown(1000)
                    }, 1000
                ):
                clearInterval(this.timer);
                this.props.stopTimer('stop')
            }
        );
       
    }

    handleChange = (currenttime) => {
        if(currenttime === 0) {
            clearInterval(this.timer);
            this.props.breakTime('change');
            this.timer = setInterval(
                () => {
                    this.props.countDown(1000)
                }, 1000
            )
        }
    };

    setTime() {
        let minutes = Math.floor(this.props.currenttime/60000);
        let seconds = (this.props.currenttime - minutes) * 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        return minutes + ':'+ seconds;
    }

    render() {
        return(
            <div>
                <div id='timer-label'>
                    {this.props.timelabel} 
                </div>
                <div id='time-left'onChange={this.handleChange(this.props.currenttime)}>
                    {this.setTime()}
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