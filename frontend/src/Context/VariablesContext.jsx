import React, { useState, useContext } from "react"



export const variablesContext = React.createContext()

export default function VariablesContextProvider(props){

    const [lat, setLat] = useState("52.5200")
    const [long, setLong] = useState("13.4050")
    const [apiWeatherObject, setApiWeatherObject] = useState()
    const [flagLatLong, setFlagLatLong] = useState()
    const [cityName, setCityName] = useState("Berlin")
    const [dayToday, setDayToday] = useState("")
    const [dateToday,setDateToday] = useState("")
    const [icon, setIcon] = useState()
    const [celsius,setCelsius] = useState()
    const [weatherDescription,setWeatherDescription] = useState()
    const [day,setDay] =useState()
    const [night,setNight,] = useState()
    const [windSpeed, setWindSpeed] = useState()
    const [rain, setRain] = useState()
    const [sunrise,setSunrise] = useState()
    const [sunset, setSunset] = useState()
    

    const contextValues = {
        cityName, setCityName,
        lat, setLat, long, setLong,
        apiWeatherObject, setApiWeatherObject,
        flagLatLong, setFlagLatLong,
        dayToday, setDayToday,dateToday,setDateToday,
        icon, setIcon,celsius,setCelsius,
        weatherDescription,setWeatherDescription,
        day,setDay, night,setNight,
        windSpeed, setWindSpeed,rain, setRain,
        sunrise, setSunrise,sunset, setSunset
    }

    return(
        <variablesContext.Provider value={contextValues}>
            {props.children}
        </variablesContext.Provider>
    )
}

