import { useState } from "react"
import axios from "axios";

const App=()=>{
interface forminterface{
    fullname:String,
    email:String,
    password:String
}


const [form, setForm]=useState <forminterface>({
    fullname:'',
    email:'',
    password:''
})

const handleform=async(e:React.ChangeEvent<HTMLInputElement>)=>{
const input =e.target
const name=input.name 
const value=input.value 
setForm({
    ...form,
    [name]:value


})





}

const handlesubmit=async (e:React.FormEvent<HTMLFormElement>)=>{
         e.preventDefault()
        const {data}= await axios.post('http://localhost:8080/signup',form)
         console.log(data)
}

    return(
      

<div >

    <h1>signup form </h1>
    <p>fill the form for the registration </p>


<div  className="flex flex-col  w-40  " >

<form onSubmit={handlesubmit} >
    
<input className="border rounded-2xl"
 name="fullname"
type="text"
placeholder="enter the name here"
onChange={handleform}
/> 

<input
type="email"
name="email"
className="bg-gray-300 border rounded-4xl"
placeholder="enter the email here"
onChange={handleform}
/>


<input 
type="password"
name="password"
placeholder="enter the password here"
className="bg-gray-300 border rounded-full"
onChange={handleform}
/>

<button  >Submit </button>

</form>
</div>

<h1>{JSON.stringify(form)}</h1>


</div>

    )
}

export default App
