import "./CityNameAndDate.scss"
import { useContext, useEffect } from "react";
import { variablesContext } from "../Context/VariablesContext.jsx"
import moment from "moment";


export default function CityNameAndDate(){
    const {cityName, apiWeatherObject,dayToday, setDayToday,dateToday,setDateToday} =useContext(variablesContext)
    const weekArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]


    useEffect(() => {
        if(!apiWeatherObject){return}
        const month = moment().format("LL").toString().split(" ")[0]
        const dayOfMonth = moment().format("MMM Do YY").split(" ")[1] 
        const date = month + " " +  dayOfMonth

        setDayToday(moment().format("dddd"))
        setDateToday(date)

    },[apiWeatherObject])

    


    return (
        <div className="CityNameAndDate">
            <div className="cityName">{cityName}</div>
            <div className="dayAndDate">{dayToday} {dateToday}</div>
        </div>
    )
}