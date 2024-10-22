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
      <Results data={userInput}/>
    </>
  )
}

export default App
