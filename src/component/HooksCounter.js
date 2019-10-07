import React,{useState} from 'react'

// export default function HooksCounter() {
//     const [count, setCount] = useState(0)
//     return (
//         <div>
//             <button onClick={()=>{setCount(count+1)}}> + </button>
//              {count}
//             <button onClick={()=>{setCount(count-1)}}> - </button>
//         </div>
//     )
// }

// import React from 'react'

export default function HooksCounter() {
    const [ time, setTime ] = useState(new Date());
    const [ timerId,setTimerId ] = useState(undefined);
    const [ timeElapsed,setTimeElapsed ] = useState([])
    /*** Start Timer  */
    const startTimer = ()=>{
        const startId = setInterval(()=>{setTime(new Date())},1000)
        setTimerId(startId)
    }
    /** Stop timer  */
    const stopTimer = () =>{
        let time_ = (new Date().get() - time.getSeconds())
        setTimeElapsed([...timeElapsed,time_])
        // clearInterval(timerId)

    }


    return (
        <div>
            <button onClick={ ()=>startTimer() }>Start</button>
            <div>{  `${time.getHours()} : ${time.getMinutes()} : ${time.getSeconds()} ` } </div>
            <button onClick={()=>stopTimer() }>Stop</button>
            <div>
                {
                    timeElapsed.map(time => <li>{time}</li>)
                }
            </div>
        </div>
    )
}

