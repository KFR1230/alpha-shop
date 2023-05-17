import styles from './progress.module.scss'
import ProgressStep1 from './step/step1.jsx'
import ProgressStep2 from './step/step2.jsx'
import ProgressStep3 from './step/step3.jsx'
import NextStep from './progress-control/progressControl.jsx'


export default function ProgressControl ({handleNextStep,handleLastStep, step}){
  return(
    <section className={`${styles.formContainer} col col-12`}>
      {step ===0 && <ProgressStep1 /> }
      {step ===1 && <ProgressStep2 /> }
      {step ===2 && <ProgressStep3 /> }
      <NextStep 
       handleNextStep={handleNextStep}
       handleLastStep={handleLastStep}  
       step={step} />
      
   </section> 
  )
}