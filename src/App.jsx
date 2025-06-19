import React, {useState} from "react";
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results";

function App() {
  
    const [userInput, setUserInput] = useState({
        initialInvestment : 10000,
        annualInvestment : 1200,
        expectedReturn : 6,
        duration : 10
    });

    const inputValid = userInput.duration >= 1;

    
    function handleChange(inputIdentifier, newValue){
        setUserInput(prev => {
            return {
                ...prev,
                [inputIdentifier] : +newValue
            }
        })
        
    console.log({userInput})

    }

  return (
    <>
    
    <Header />
    <UserInput userInput={userInput} onChange={handleChange}/>

    { inputValid ? <Results userInput={userInput} /> : <p className="center" style={{color : 'red'}}> Duration should be greater than 0</p>}
    
    </>
  )
}

export default App
