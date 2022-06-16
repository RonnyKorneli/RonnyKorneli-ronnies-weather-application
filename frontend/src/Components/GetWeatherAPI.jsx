import { useContext, useEffect, useState } from "react";
import { variablesContext } from "../Context/VariablesContext.jsx"


export default function GetWeatherApi(props){

    const [apiObjectLatLong, setApiObjectLatLong] = useState([])
    const {cityName, lat, setLat, long, setLong,
           apiWeatherObject, setApiWeatherObject} =useContext(variablesContext)

    
    

    /////////////// first useffect to get latitude and longitude from user destination input //////////
      useEffect(() => {
          
        const url = "http://localhost:4000/latlongApi"
        
        const payload = {
          name: cityName
        }
        const config = {
          method:"POST",
          headers:{
            "Content-type":"application/json"
          },
          body:JSON.stringify(payload)
        }
      
      fetch(url, config)
        .then(response => response.json())
        .then((result)=>{
          if(result.error){
            console.log("Error",result.error)
            return;
          }
          setApiObjectLatLong(result.data)
          setLat(result.data[0].latitude)
          setLong(result.data[0].longitude)
        })

        
      }, [cityName]);


    ///////////////////////// use effect to get final object from API /////////////////////////
     useEffect(()=>{
        
          const url = "https://backend-we-app.herokuapp.com/openweather"

          const payload = {
            latitude : lat,
            longitude : long
          }
          const config = {
            method:"POST",
            headers: {
              "Content-type":"application/json"
            },
            body:JSON.stringify(payload)
          }

          fetch(url, config)
            .then(response => response.json())
            .then((result)=>{
              if(result.error){
                console.log("Error"+ result.error)
                return;
              }
              setApiWeatherObject(result)
              
            })


          },[lat,long])


      
  return(

        <div></div>
    )

}

