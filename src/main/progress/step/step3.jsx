import styles from './Step3.module.scss'
import { useContext } from 'react'
import { StepContext } from '../../cart/stepContext'


export default function ProgressStep3(){
  const {userInfo,setUserInfo,handleInputChange} = useContext(StepContext)
  
  return(
     <form className= {`${styles.progressForm} col col-12`} data-phase="credit-card">
            <h3 className={styles.formTitle}>付款資訊</h3>
            <div className={`${styles.formBody} col col-12`}>
              <div className={`col col-12`}>
                <div className={`${styles.inputGroup} input-w-lg-4 input-w-sm-full`}>
                  <div className={styles.inputLabel}>持卡人姓名</div>
                  <input type="text" placeholder="John Doe" name= 'name' value={userInfo.name} onChange={e => handleInputChange(e)}/>
                </div>
              </div>
              <div className={`col col-12`}>
                <div className={`${styles.inputGroup} input-w-lg-4 input-w-sm-full`}>
                  <div className={styles.inputLabel}>卡號</div>
                  <input type="text" placeholder="1111 2222 3333 4444" name= 'cardNum' value={userInfo.cardNum} onChange={e => handleInputChange(e)} />
                </div>
              </div>
              <div className={`col col-12`}>
                <div className={`${styles.inputGroup} input-w-lg-3 input-w-sm-s3`} >
                  <div className={styles.inputLabel}>有效期限</div>
                  <input type="text" placeholder="MM/YY" name= 'validDate' value={userInfo.validDate} onChange={e => handleInputChange(e)}/>
                </div>
                <div className={`${styles.inputGroup} input-w-lg-3 input-w-sm-s3`}>
                  <div className={styles.inputLabel}>CVC / CCV</div>
                  <input type="text" placeholder="123" name= 'CVC' value={userInfo.CVC} onChange={e => handleInputChange(e)}/>
                </div>
              </div>
            </div>
          </form>
  )
}