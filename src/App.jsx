import Form from "./form"
import Result from "./result"

import "./main.css"
import { useState } from "react"

function App() {

  const [data, setData] = useState("")

  const callback = (data) =>{

    setData(data) // Put the data i just got from the child componen in the data variable
    
  }


  return(
    <>
    <div className="container">

      <div className="form-container">

      <h1>Enter your Letter</h1>

        <Form  sendDataToParent={callback}/>
      
      </div>
      <div className="reslut-container">
         <Result data={data}/> {/* Passsing the data to the Result component as a prop   */}
      </div>
    </div>
    </>
    
  )

}

export default App
