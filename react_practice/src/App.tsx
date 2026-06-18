import { useState } from "react"


const App = () => {
    const [button, setButton] = useState(true)

const handleclick=()=>{
      setButton(!button)
     const x= document.getElementById("true")
     if(x)
    x.style.background = "red";
}

    return (
        <div>
         {
            
button? (  <button id="true" onClick={handleclick} > this is true button</button> ): (<button id="true" onClick={handleclick} > this is false button</button>)
             
         }
        </div>
    )
}

export default App