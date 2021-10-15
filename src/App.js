import React, {useReducer} from 'react';
import reducer, {initialState} from './reducers/index'
import './App.css';
import {applyNumber, changeOperator, clearDisplay, memoryAdd, memoryRecall, memoryClear} from './actions/index'
import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';


function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  const handleApplyNumber = (e) =>{
    dispatch(applyNumber(e))
  };

  const changeOp = (e) =>{
    dispatch(changeOperator(e))
  }

  const clearDis = (e) =>{
    dispatch(clearDisplay(e))
  }

  const memAdd = (e) =>{
    dispatch(memoryAdd(e))
  }

  const memRecall = (e) =>{
    dispatch(memoryRecall(e))
  }

  const memClear = (e) =>{
    dispatch(memoryClear(e))
  }
  
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png" alt="something broke"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory} </span>
            </div>
            
            <div className="row">
              <CalcButton onClick={() => memAdd()} value={"M+"}/>
              <CalcButton onClick={() => memRecall()} value={"MR"}/>
              <CalcButton onClick={() => memClear()} value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => handleApplyNumber(1)} value={1}/>
              <CalcButton onClick={() => handleApplyNumber(2)} value={2}/>
              <CalcButton onClick={() => handleApplyNumber(3)} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => handleApplyNumber(4)} value={4}/>
              <CalcButton onClick={() => handleApplyNumber(5)} value={5}/>
              <CalcButton onClick={() => handleApplyNumber(6)} value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => handleApplyNumber(7)} value={7}/>
              <CalcButton onClick={() => handleApplyNumber(8)} value={8}/>
              <CalcButton onClick={() => handleApplyNumber(9)} value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => changeOp("+")} value={"+"}/>
              <CalcButton onClick={() => changeOp("*")} value={"*"}/>
              <CalcButton onClick={() => changeOp("-")} value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton onClick={() => clearDis()} value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
