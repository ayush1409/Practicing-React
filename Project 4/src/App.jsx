import { Header } from "./components/Header"
import { Results } from "./components/Results"
import { UserInput } from "./components/UserInput"

import { useState } from "react"

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  }) ;

  const validInputData = userInput.duration >= 1 ;

  function handleInputChange(inputIdentifier, newValue){
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [inputIdentifier]: +newValue
      }
    }) ;
  }

  return (
    <>
      <Header />
      <UserInput
        userInput={userInput}
        onInputChange={handleInputChange}/>
      {validInputData && <Results data={userInput}/>}
      {!validInputData && <p className="center">Please enter duration greater then zero</p>}
    </>
  )
}

export default App
