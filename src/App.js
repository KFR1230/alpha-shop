import './reset.scss'
import './App.scss'
import './App.css';
import Main from './main/main.jsx'
import Progress from './main/progress/progress.jsx'
import Register from './main/register/register.jsx';
import Cart from './main/cart/cart.jsx'
import {useState} from 'react'
import { CartContextProvider } from './main/cart/cartContext';



const stepState = [
  {stepState1 : "active",
   stepState2 : "none",
   stepState3 : "none",
   order: "1"
},{
  stepState1 : "done",
   stepState2 : "active",
   stepState3 : "none",
   order: true
},{
  stepState1 : "done",
   stepState2 : "done",
   stepState3 : "active",
   order: true
}
]



function App() {
  const [stepContent , setStepContent ] = useState(stepState[2])
  const [step , setStep] = useState(2)
  function handleNextStep (e){
  step ===2 && alert("ok");
  if(step < 3) {
    setStep(s=> (s===2)? 2 : s+1)
  }
  setStepContent({...stepContent, ...stepState[step+1]})
  //不曉得為什麼這裡帶step還是會維持０ 
  //step的數值有變更 但在setStepContent的step還是０
  
  
}
 function handleLastStep (e){
  if(step > 0) {
    setStep(s=>(s === 0)? 0: s-1)
  }
  setStepContent({...stepContent,...stepState[step-1]}) 
  //不曉得為什麼這裡帶step還是會維持０
  //step的數值有變更 但在setStepContent的step還是０
  
}
  return (
    <>
      <Main>
        <CartContextProvider>
        <div className='leftContent'>
          <Register 
          displayer1={stepContent.stepState1} 
          displayer2={stepContent.stepState2} 
          displayer3={stepContent.stepState3}
          order = {stepContent.order}
          />
          <Progress 
          handleNextStep={handleNextStep} 
          handleLastStep={handleLastStep} 
          step={step}/>
        </div>
        <div className='rightContent'>         
             <Cart/>
        </div>
        </CartContextProvider>
      </Main>
    </>
  );
}

export default App;
