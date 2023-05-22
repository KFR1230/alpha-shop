import { createContext,useState, useContext } from "react";
import {cartContext} from './cartContext'


let userCardInfo = {
  name:"",
  cardNum:"",
  validDate:"",
  CVC:""
}




const StepContext = createContext(null)

const StepProvider = ({children})=>{
  const [userInfo, setUserInfo] = useState(userCardInfo)
  const {TotalAmount} = useContext(cartContext);
  
function handleInputChange (e){
  setUserInfo({...userInfo,[e.target.name]: e.target.value})
}

 function handleUserInfo (){
    console.log(`持卡人姓名 : ${userInfo.name}`)
    console.log(`卡號 : ${userInfo.cardNum}`)
    console.log(`有效期限 : ${userInfo.validDate}`)
    console.log(`CVC : ${userInfo.CVC}`)
    console.log(`總金額：＄${TotalAmount()}`)
  }


  const value = {
    userInfo,
    setUserInfo,
    handleInputChange,
    handleUserInfo
  }

  return (
    <StepContext.Provider value={value}>
      {children}
    </StepContext.Provider>
  )
}

export {StepContext,StepProvider}