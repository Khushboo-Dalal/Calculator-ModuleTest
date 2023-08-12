import React, { useState } from "react";

const Calculator = () => {
    let [num1, setNum1] = useState("");
    let [num2, setNum2] = useState("");
    let [result, setResult] = useState('');
    let [error, setError] = useState('');

    function numberNum1(event){
        setNum1(event.target.value);
     }
    function numberNum2(event){
         setNum2(event.target.value);
     }

    function ifvalid(op) {
        if(num1 === '' && num2 === ''){
            setError("Num1 and Num2 can't be empty!")
            return;
        }
        else if(num1 === ''){
            setError("Num1 can't be empty!")
           return;
        }
        else if(num2 === ''){
            setError("Num2 can't be empty!")
            return;
        }
        else operation(op);
     }

    function operation(op) {
        setError(''); /*doing this function*/
        if (op === "+") {
          setResult(Number(num1) + Number(num2))
        }
        else if (op === "-") {
           setResult(Number(num1) - Number(num2))
        }
        else if (op === "*") {
           setResult(Number(num1) * Number(num2))
        }
        else if (op === "/") {
           setResult(Number(num1) / Number( num2))
        }
        else {
            setResult('');
        }
    }

    return(
        <div className="calc">
            <h1>React Calculator</h1>
            <div className="inputs">
               <input type='text' placeholder='Enter First Number' onInput={numberNum1}/>
               <input type='text' placeholder='Enter Second Number' onInput={numberNum2}/>
            </div>
            <div className="buttons">
               <button onClick= {()=> ifvalid('+')}>+</button>
               <button onClick= {()=> ifvalid('-')}>-</button>
               <button onClick= {()=> ifvalid('*')}>*</button>
               <button onClick= {()=> ifvalid('/')}>/</button>
            </div>
        {error && <div className="error">
        <div style={{color : "red"}}>Error!</div>
        <div>{error}</div>
        </div>}
        {!error && result !== '' && <div className="success">
        <div style={{color : "green"}}>Success!</div>
        <div>Result: {result}</div>
        </div>}
        </div>
        
    )
}

export default Calculator;