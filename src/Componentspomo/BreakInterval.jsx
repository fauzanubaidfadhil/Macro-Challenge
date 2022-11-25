import React from 'react';

function BreakInterval(props){
    function decreaseBreak() {
        if (props.breakInterval === 1 ) {
            return;
        }
        props.decreaseBreak();
    }

        function increaseBreak(){
            if (props.breakInterval === 60) {
                return;
            }
           props.increaseBreak();
        }
    return(
        <section>
            <h4>Extra Time</h4>
            <section className="interval-container">
            <button 
            disabled={props.isPlay === true ? "disabled": ""} 
            onClick={decreaseBreak}
            >
            Down
            </button>
            <p className='interval-length'>{props.breakInterval}</p>
            <button 
            disabled={props.isPlay === true ? "disabled"
            : ""} onClick={increaseBreak}
            >
            Up
            </button>
        </section>
        </section>
       
    );
}

export default BreakInterval;