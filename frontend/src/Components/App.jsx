import Top from "./Top.jsx"
import Input from "./Input"
import CityNameAndDate from "./CityNameAndDate.jsx"
import TempAndIcon from "./TempAndIcon.jsx"
import "./App.scss"
import RowOfBoxes from "./RowOfBoxes.jsx"
import GetWeatherApi from "./GetWeatherAPI"


console.log(process.env.REACT_APP_BACKEND_BASEURL)

export default function App(){

    GetWeatherApi()

    return(
        <div className="backgroundWithOpacity">
            <div className="App">
                    <Top />
                    <Input />
                    <CityNameAndDate />
                    <TempAndIcon />
                    <RowOfBoxes />
            </div>
        </div>
    )
}