import styles from './progress.module.scss'
import ProgressStep1 from './step/step1.jsx'
import NextStep from './progress-control/progressControl.jsx'


export default function ProgressControl (){
  return(
    <form className= {`${styles.progressForm} col col-12`} data-phase="address">
            <h3 className={styles.formTitle}>
              寄送地址
            </h3>
            <ProgressStep1 />
            <NextStep />
    </form>
  )
}