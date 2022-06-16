import React from "react";
import  ReactDOM  from "react-dom";
import App from "./Components/App.jsx"
import { BrowserRouter } from "react-router-dom"
import VariablesContextProvider from "./Context/VariablesContext.jsx"



ReactDOM.render(
     
          <BrowserRouter>
               <VariablesContextProvider>
                <App />
               </VariablesContextProvider>
          </BrowserRouter>, 
          document.querySelector("#root")
)
