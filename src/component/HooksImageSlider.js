import React,{useState,useEffect} from 'react'
const gal = ['pic1.jpg','pic2.jpg','pic4.jpg','pic5.jpg','pic6.jpg']
export default function HooksImageSlider() {
    const [currInmage,setIndex] = useState(0);
    const [prevI,setPrev] = useState(gal.length-1)
    const [nextI,setNext] = useState(currInmage+1)
    const next = () => {
        if(currInmage===gal.length-1) {
            setPrev(currInmage)
            setNext(1)
            setIndex(0)
        } else {
            setPrev(currInmage)
            setIndex(currInmage+1)
            if(currInmage+2 > gal.length-1) {
                setNext(0)
            } else{
                setNext(currInmage+2)
            }  
        }
    }

    const prev = () =>{
        if(prevI === 0) {
            
           setPrev(gal.length-1);
           setIndex(0);
           setNext(1);
        } else {
            setNext(currInmage)
            setIndex(prevI);
            setPrev(prevI-1);
        }
       
    }
    useEffect(()=>{
        let tempid = setInterval(()=>{next()},3000)
       
        return () =>{ clearInterval(tempid)}
    })
    // console.log("next prev",prevI,currInmage, nextI)

return (

        
        <div>
            <div className="w3-content" style={{"width":"1200px"}}>
                <img className="mySlides"
                 src={`./image/${gal[currInmage]}`} 
                 style={{
                    "width":"100%",
                    "height":"500px"
                    }} 
                 />
                <div className="w3-row-padding w3-section">
                    <div className="w3-col s4 img">     
                    <img 
                        className="demo w3-opacity" src={`./image/${gal[prevI]}`}
                        style={{"width":"100%","height":"25%"}}  />
                    </div>
                    <div className="w3-col s4 img ">
                    <img 
                        className="demo curr" src={`./image/${gal[currInmage]}`}
                        style={{
                        "width":"100%",
                        "height":"25%",
                        "display":"block",
                        "borderRadius": "2px"
                        }} 
                         />
                    </div>
                    <div className="w3-col s4 img img-item ">
                    <img 
                        className="demo w3-opacity" 
                        src={`./image/${gal[nextI]}`}
                        style={{"width":"100%","height":"25%","display":"block"}} 
                     
                    />
                    
                    <a 
                        href="javascript:void(0)"
                        onClick={()=>{next()}}
                    >
                        <i className="fa fa-caret-right" style={{"font-size":"36px"}}></i> 
                    </a>
                    <a 
                        href="javascript:void(0)"
                        onClick={()=>{prev()}}
                    >
                        <i className="fa fa-caret-left" style={{"font-size":"36px"}}></i>

                    </a>
                    </div> 
                </div>
            </div>  
        </div>
    )
}
