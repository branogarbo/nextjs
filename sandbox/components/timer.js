import React from 'react'

export default function Timer() {
   let [seconds,setSeconds] = React.useState(0);
   let [isOn,setOn] = React.useState(false);

   let toggleTimer = () => {
      setOn(!isOn);
   }

   let resetTimer = () => {
      setSeconds(0);
      setOn(false);
   }

   React.useEffect(()=>{
      let tick = null;

      if (isOn) {
         tick = setInterval(() => setSeconds(seconds + 1), 0);
      }

      else if (!isOn && seconds != 0) {
         clearInterval(tick);
      }

      return () => clearInterval(tick);
   })

   return (
      <div className="container">
         <h2>{seconds}</h2>
         <button onClick={toggleTimer}>{isOn ? 'Stop' : 'Start'}</button>
         <button onClick={resetTimer}>Reset</button>
      </div>
   );
}