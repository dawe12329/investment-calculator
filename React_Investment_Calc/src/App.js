import Table from "./Table.jsx";
import Header from "./Header.jsx";
import Form from "./Form.jsx";
import { initialInput } from "./Form.jsx";

import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState(initialInput);
  const [results, setResults] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);

    const yearlyData = [];
    
    let currentSavings = +userInput["current-savings"];
    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];
    
    if (initialInput || userInput) {
      for (let i = 0; i < duration; i++) {
        const yearlyInterest = currentSavings * expectedReturn;
        currentSavings += yearlyInterest + yearlyContribution;
        yearlyData.push({
          year: i + 1,
          yearlyInterest: yearlyInterest,
          savingsEndOfYear: currentSavings,
          yearlyContribution: yearlyContribution,
        });
      }
       };
       setResults(yearlyData)
       console.log(results)
      };

  return (
    <div>
      <Header></Header>
      <Form
        userInput={userInput}
        initialInput={initialInput}
        setUserInput={setUserInput}
        onCalculate={calculateHandler}
      ></Form>
      {!results && null}
      {results && <Table data = {results}></Table>}
    </div>
  );
}

export default App;
