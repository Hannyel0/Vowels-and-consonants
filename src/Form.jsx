import { useRef, useState } from "react"

export default function Form({sendDataToParent}) {

    const inputInfo = useRef(null)  //getting the input element 

    const [err, setErr] = useState("") //error handling


    const sortVowels = (char) =>{

        const lower = char.toLowerCase()

        if(char.length == ''){         //Checking for possible empty answer or answers containing more than one charcter
            setErr("Input empty")
            return ''
        }else if(char.length >= 2){
            setErr("Only one character accepted")
            return ""
        }

        setErr("") //resetting the error handler

        const vowels = ["a", "e", "i", "o", "u"]


        switch(true){
            case vowels.includes(lower):
                return `The Character you provided ${lower.toUpperCase()} is vowel`
            case lower >= "a" && lower <= "z":
                return `The character you provided, ${lower.toUpperCase()}, is a consonant`        //Testing all the possible cases
            case !isNaN(lower):
                return `What you provided is a number: ${char}`
            default:
                setErr("Character not valid")
                return ""
        }
        
    }

    function handleSubmit(e){

        e.preventDefault();

        const data = sortVowels(inputInfo.current.value) //putting the data i just got from the input in a valriable

        sendDataToParent(data) //sending the data I just processed to the parent component (App.jsx)

    }


  return (
    <form className="form-letter" onSubmit={handleSubmit}>

        
        <div className={`error-wrapper`}>
            <div className="error-handle">{err}</div>
        </div>
        <input ref={inputInfo} className={err ? "input-error" : ""} type="text" name="character" id="character" placeholder="exp. A" autoComplete="off"/>
        <input type="submit" value="Check"/>
    </form>
  )
}
