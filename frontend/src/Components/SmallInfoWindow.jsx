import { useContext } from "react"
import { useEffect } from "react/cjs/react.development"
import {variablesContext} from "../Context/VariablesContext.jsx" 
import "./SmallInfoWindow.scss"

export default function SmallInfoWindow(){


    const { apiWeatherObject,day,setDay, night,setNight,
            windSpeed, setWindSpeed,rain, setRain,
            setSunRiseHours,sunrise,setSunrise, sunset, setSunset } = useContext(variablesContext)

        if(!apiWeatherObject){return "loading"}

        const timeStamp= 1648443028 * 1000
        const date = new Date(timeStamp)

        const array = apiWeatherObject.hourly.map(item => item.temp)
        const toNumber = parseInt(array)

       useEffect(() => {
        if(!apiWeatherObject){return "loading"}

        const sunriseTimeStamp = (apiWeatherObject.daily[0].sunrise) * 1000
        const realtimeSunset = new Date(sunriseTimeStamp).toString().split(" ")[4].split("").splice(0,5).join("")

        const sunsetTimeStamp = (apiWeatherObject.daily[0].sunset) * 1000
        const sunsetTime = new Date(sunsetTimeStamp).toString().split(" ")[4].split("").splice(0,5).join("")
        
        setSunrise(realtimeSunset)
        setSunset(sunsetTime)        
        setWindSpeed(apiWeatherObject.current.wind_speed)
        setRain(apiWeatherObject.hourly[0].pop)
        setDay(((apiWeatherObject.daily[0].temp.day)-273.15).toFixed(1))
        setNight(((apiWeatherObject.daily[0].temp.night)-273.15).toFixed(1))
        




       },[apiWeatherObject])

       

    return(
        <div className="SmallInfoWindow">
            
            <div className="topBox">

                <div className="day">
                <h4>{day} C°</h4>
                    <h4>Day</h4>
                </div>

                <div className="wind">
                    <h4>{windSpeed}mph</h4>
                    <h4>Wind</h4>
                </div>

                <div className="sunrise">
                    <h4>{sunrise}</h4>
                    <h4>Sunrise</h4>
                </div>
            </div>

            <div className="bottomBox">
            
                <div className="night">
                <h4>{night} C°</h4>
                    <h4>Night</h4>
                </div>

                <div className="rain">
                    <h4>{rain} %</h4>
                    <h4>Rain</h4>
                </div>

                <div className="sunset">
                    <h4>{sunset}</h4>
                    <h4>Sunset</h4>
                </div>
                
            </div>
        
        </div>
    )



}