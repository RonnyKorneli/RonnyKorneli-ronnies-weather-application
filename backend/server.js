import express, { response } from "express"
import cors from "cors"
import dotenv from "dotenv"
import axios from "axios"

const app = express()
app.use(cors())
app.use(express.json())
dotenv.config()


app.post("/latlongApi",(req,res) => {

    const params = {
        access_key: process.env.API_KEY_FORWARD_GEO_CODE, ///// Api for latitude and longitude
        query: req.body.name
        
      }

      axios
          .get("http://api.positionstack.com/v1/forward", { params })
          .then(response => res.send(response.data))
          .catch((error) => {
            res.status("check your",error);
          });

})

app.post("/openweather", (req,res) => {

    const lat = parseInt(req.body.latitude)
    const long = parseInt(req.body.longitude)
    const key = process.env.API_KEY_OPEN_WEATHER
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&cnt=${5}&appid=${key}` ///// API for WeatherForecast

    axios.get(url)
      .then(response => res.send(response.data))
      
})



const port = process.env.PORT
app.listen(port, ()=> console.log("UP:http://localhost:"+port))