import styles from './ProgressControl.module.scss'
import rightArrow from '../../../icon/right-arrow.svg'
import leftArrow from '../../../icon/left-arrow.svg'
import { useContext } from 'react'
import { StepContext } from '../../cart/stepContext'


export default function NextStep ({handleNextStep,handleLastStep , step}){
  const {handleUserInfo} = useContext(StepContext)


 
  return (
    <section className={`${styles.progressContainer} col col-lg-6 col-sm-12`}>
       {(step !== 0 )&& <section className={`${styles.buttonGroup} col col-12 `} data-phase="address">
          <button className={styles.last} onClick={()=>handleLastStep()}> 
            {/* <svg class="cursor-point">
              <use xlink:href="#svg-icon-right-arrow"></use>
            </svg> */}
            <img className={styles.leftArrow} src={leftArrow} alt="rightArrow" />
            上一步
          </button>
        </section>}
       <section className={`${styles.buttonGroup} col col-12 `} data-phase="address">
          <button className={styles.next} onClick={(step === 2) ?  handleUserInfo : handleNextStep}>
            {(step === 2)?  "確認下單" : "下一步"}
            
            
            
            {/* <svg class="cursor-point">
              <use xlink:href="#svg-icon-right-arrow"></use>
            </svg> */}

            {step <2 && <img className={styles.rightArrow} src={rightArrow} alt="rightArrow" />}
          </button>
        </section>
    </section>
  )
}