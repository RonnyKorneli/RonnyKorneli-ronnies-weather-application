import "./RowOfBoxes.scss"
import {variablesContext} from "../Context/VariablesContext.jsx" 
import { useState, useContext, useEffect, useRef } from "react"
import {motion} from "framer-motion"



export default function RowOfBoxes(){

    const [width, setWidth] = useState(0)
    const carousel = useRef()
    const [arrayOfHourWeather, setArrayOfHourWeather] = useState([])
    const [arrayTemp, setArrayTemp] = useState([])
    const [arrayOfIcons, setArrayOfIcon] = useState([]) 
    const [icons, setIcons] = useState([])
    const [arrayLength, setArrayLength] = useState()
    const [arrayOfDates,setArrayOfDates] = useState([])
    const [whichHour, setWhichHour] = useState([])
    
    const {apiWeatherObject, cityName} = useContext(variablesContext)


    useEffect(()=>{
        
        if(!apiWeatherObject){return "loading"}

        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)

        setArrayOfHourWeather(apiWeatherObject.hourly.map(item => item))
        setArrayTemp(apiWeatherObject.hourly.map(item => ((parseInt(item.temp))- 273.15).toFixed(1)))

        const arrayDatesTimeStamp = apiWeatherObject.hourly.map(item => item.dt * 1000 )
        const arrayDates = arrayDatesTimeStamp.map(item =>  new Date(item).toString().split(" ").splice(1,2).join(" ") )
        setArrayOfDates(arrayDates)

        setArrayLength((arrayTemp.length))

        const icons = apiWeatherObject.hourly.map(item => item.weather[0].icon)
        setArrayOfIcon(icons)

        const hours = (apiWeatherObject.hourly.map(item => item.dt * 1000)).map( x => new Date(x).getHours())
        setWhichHour(hours)

        console.log(whichHour)

    },[apiWeatherObject, cityName])

    console.log(apiWeatherObject)
    


    

    return(

        <div>
            <motion.div ref={carousel} className="carousel" whileTap={{cursor: "grabbing"}}>
                <motion.div drag="x" dragConstraints={{right:0, left: -width}} className="innerCaousel">

                    {[...Array(arrayLength)].map((item, index) => {

                        return (
                            <motion.div className="item" key={index}>
                                <div className="divs">
                                    <h3 id="dates">{arrayOfDates[index]}</h3>
                                    <p>{`${whichHour[index]}:00`}</p>
                                    <img className="img" src={`http://openweathermap.org/img/wn/${arrayOfIcons[index]}@2x.png`} /> 
                                    <h3 id="temp">{`${arrayTemp[index]}°`}</h3>
                                </div>
                            </motion.div>)
                    })}
                    
                </motion.div>
            </motion.div>
        </div>
    )

}



//responding to change over following a plan.