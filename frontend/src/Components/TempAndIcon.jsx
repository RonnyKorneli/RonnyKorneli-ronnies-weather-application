import "./TempAndIcon.scss"
import { variablesContext } from "../Context/VariablesContext.jsx"
import { useContext } from "react"
import SmallInfoWindow from "./SmallInfoWindow.jsx"



export default function TempAndIcon(){
    const {apiWeatherObject,icon, setIcon,celsius,setCelsius,
           weatherDescription,setWeatherDescription} =useContext(variablesContext)


        if(!apiWeatherObject){return "loading"}
            const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`

            setIcon(apiWeatherObject.current.weather[0].icon)
            setCelsius((apiWeatherObject.current.temp - 273.15).toFixed())
            setWeatherDescription(apiWeatherObject.current.weather[0].description)



    return(
        <div className="TempAndIcon">
        
            <div className="leftBox">
                <img src={iconUrl} className="Icon" />
                <div>
                    <div className="celsius">{celsius}°</div>
                    <div className="weatherDescription">{weatherDescription}</div>
                </div>
            </div>

            <div className="rightBox">
                <SmallInfoWindow />
            </div>
        </div>    
    )



}