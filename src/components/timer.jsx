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
        this.handleChange = this.handleChange.bind(this)
    }

    handleReset = () => {
        clearInterval(this.timer);
        this.setState({play: false});
        const clear = 'clear';
        const sound = document.getElementById('beep');
        sound.pause();
        sound.currentTime = 0;
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

    componentWillReceiveProps = () => {
        this.handleChange();
    }

    handleChange = () => {
        console.log(this.props.currenttime);
        if(this.props.currenttime === 0) {
            clearInterval(this.timer);
            this.playSound();
            this.props.breakTime('change');
            this.timer = setInterval(
                () => {
                    this.props.countDown(1000)
                }, 1000
            )
        }
    };

    playSound = () => {
        const sound = document.getElementById('beep');
        sound.currentTime = 0;
        sound.play();
    }

    setTime() {
        let minutes = Math.floor(this.props.currenttime/60000);
        let seconds = ((this.props.currenttime - (minutes*60000)) /1000).toFixed();
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
                <div id='time-left'>
                    {this.setTime()}
                </div>
                <button id='start_stop' onClick={this.handleClick}>
                    Start/Stop
                </button>
                <button id='reset' onClick={this.handleReset}>
                    Reset
                </button>
                <audio 
                    id='beep'
                    className='clip'
                    src='https://goo.gl/65cBl1'
                    type='audio/wav'
                >
                </audio>
            </div>
        )
    }
}

const Timer = connect(mapStateToProps,mapDispatchToProps)(ConnectedTimer)

export default Timer;