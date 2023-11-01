import { useState } from "react";
import "./App.css";

function App() {
  
  const [inputValue, setInputValue] = useState("");
  
  const [calculatordata, setCalculatordata] = useState("");
 

  const handleButton = (value) => {
    setCalculatordata(calculatordata + value);
    setInputValue(inputValue + value);
    
  };

  const handleCalculate = () => {
    try {
      setCalculatordata(eval(calculatordata).toString());
      setInputValue(eval(calculatordata).toString());
      
    } catch (err) {
      setInputValue(alert("Invalid operation. Please try again."));
    }
  };

  const handleClear = () => {
    setCalculatordata("");
    setInputValue("");
   
  };

  const handleBackSpace = () => {
    
    
    setInputValue(inputValue.slice(0, -1));
   
    
  };


  return (
    <>
      <div className="d-flex justify-content-center align-items-center m-5">
        <div>
          <h2 style={{ fontFamily: "Kenia", fontSize: "80px" }}>Logic Plus</h2>
        </div>
      </div>
      <div style={{ width: "500px" }} className="  bg-info  full content container-fluid">
        <div style={{width:'100%',height:'80px'}} className="  d-flex justify-content-end align-items-center p-2 mb-5">
          {/*  */}
          <h1 style={{ fontFamily: "Caprasimo", fontSize: "30px" }}>
           
       
            {
              inputValue?.length>0?
              inputValue
              : calculatordata
            }
            </h1> 
                
        </div>
        <div style={{height:'350px'}} className="">
           <div className="d-flex justify-content-evenly align-items-center mb-2">
              <button style={{backgroundColor:'white'}} onClick={handleClear}  className="me-2 w-50 btn border rounded-4 p-3" >C</button>
              <button style={{backgroundColor:'white'}}  onClick={()=>handleBackSpace('space')} className=" me-2 w-50 border rounded-4 p-3" ><i class="fa-solid fa-delete-left fa-xl"></i></button>
              <button style={{backgroundColor:'white'}}  onClick={() => handleButton('/')} className=" me-2 w-50 btn border rounded-4 p-3" >/</button>
              <button style={{backgroundColor:'white'}}  onClick={() => handleButton('*')} className=" me-2 w-50 btn border rounded-4 p-3" >*</button>
            </div>
            <div className="d-flex justify-content-evenly align-items-center mb-2 ">
              <button onClick={() => handleButton('7')} className=" me-2 w-50 btn border-black rounded-4 p-3" >7</button>
              <button onClick={() => handleButton('8')} className=" me-2 w-50 btn border-black rounded-4 p-3" >8</button>
              <button onClick={() => handleButton('9')} className=" me-2 w-50 btn border-black rounded-4 p-3" >9</button>
              <button style={{backgroundColor:'white'}}  onClick={() => handleButton('-')} className=" me-2 w-50 btn border rounded-4 p-3" >-</button>
            </div>
            <div className=" d-grid d-flex justify-content-evenly align-items-center mb-2 ">
              <button onClick={() => handleButton('4')} className=" me-2 w-50 btn border-black rounded-4 p-3  " >4</button>
              <button onClick={() => handleButton('5')} className="  me-2 w-50 btn border-black rounded-4 p-3" >5</button>
              <button onClick={() => handleButton('6')} className="  me-2 w-50 btn border-black rounded-4 p-3" >6</button>
              <button style={{backgroundColor:'white'}}  onClick={() => handleButton('+')} className="  me-2 w-50 btn border rounded-4 p-3" >+</button>
            </div>
            <div className="d-flex justify-content-evenly align-items-center mb-2">
              <button onClick={() => handleButton('3')} className="  me-2 w-50 btn border-black rounded-4 p-3" >3</button>
              <button onClick={() => handleButton('2')} className="  me-2 w-50 btn border-black rounded-4 p-3" >2</button>
              <button onClick={() => handleButton('1')} className="  me-2 w-50 btn border-black rounded-4 p-3" >1</button>
              <button style={{backgroundColor:'white'}}  onClick={() => handleButton('.')} className="  me-2 w-50 btn border rounded-4 p-3" >.</button>
            </div>
            <div className="d-flex justify-content-evenly align-items-center mb-5">
              <button  onClick={() => handleButton('%')} className="  me-2 w-50 btn border-black rounded-4 p-3" >%</button>
              <button  onClick={() => handleButton('0')}  className=" me-2 w-50 btn border-black rounded-4 p-3" >0</button>
              <button   className="  me-2 w-50 btn border-black rounded-4 p-3" >,</button>
              <button style={{backgroundColor:'white'}}  onClick={handleCalculate} onC className=" me-2 w-50 btn border rounded-4 p-3" >=</button>
            </div>
            
           

          </div>
      </div>
    </>
  );
}

export default App;
