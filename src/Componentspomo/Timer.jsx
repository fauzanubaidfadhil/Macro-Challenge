import React from 'react';



class Timer extends React.Component {
    constructor() {
        super();

        this.state={
            isSession: true,
            timerSecond: 0,
            intervalId: 0,
        };

        this.playTimer= this.playTimer.bind(this);
        this.stopTimer= this.stopTimer.bind(this);
        this.resetTimer= this.resetTimer.bind(this);
        this.decreaseTimer = this.decreaseTimer.bind(this);
    }

    playTimer() {
        let intervalId = setInterval(this.decreaseTimer, 1000);
        this.props.onPlayStopTimer(true);
        this.setState({
            intervalId: intervalId
        })
    }

    decreaseTimer() {
        switch (this.state.timerSecond) {
            case 0:
                if (this.props.timerMinute === 0) {
                    if (this.state.isSession) {
                        this.setState({
                            isSession: false
                        });
                        this.props.toggleInterval(this.state.isSession);
                    } else {
                        this.setState({
                            isSession: true
                        });
                        this.props.toggleInterval(this.state.isSession);
                    }
                } else {
                    this.props.updateTimerMinute()
                   this.setState({
                    timerSecond: 59
                   })
                }
               break;
                default:
                    this.setState((prevState) => {
                        return {
                            timerSecond: prevState.timerSecond - 1
                        }
                    })
                break;
        }
    }

    stopTimer() {
        clearInterval(this.state.intervalId);
            this.props.onPlayStopTimer(false);
    }

    resetTimer() {
    this.stopTimer();
    this.props.resetTimer();
    
    this.setState({
        timerSecond : 0
    })
    }


    render() {
        return(
            <section>
                <div style={{ 
    borderStyle: "solid",
    width: "500px",
    height: "330px",
    left: "100px",
    top: "260px",  
    borderRadius:"30px",
    position:"fixed",
    borderColor:"none",
    backdropFilter:"blur(5px)"}}>
                <section>
    <h1 className="text-timer">{this.state.isSession === true ? "Timer" : "Break"}</h1>
    <span className='timer1' >{this.props.timerMinute}</span>
    <span className='timer2' >:</span>
    <span className='timer3' >
    {this.state.timerSecond === true ? 
    "00" : this.state.timerSecond < 10 ? 
    "0" + this.state.timerSecond 
    : this.state.timerSecond}
    </span>
    </section>
    <section>
<div>
<button className='button-play' onClick={this.playTimer}>Play</button>
</div>
<button className='button-stop' onClick={this.stopTimer}>Stop</button>
<button className='button-refresh' onClick={this.resetTimer}>Refresh</button>
</section>
</div>
</section>
                
        );
    }
}

export default Timer;