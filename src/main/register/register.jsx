import styles from './Register.module.scss'
import circleComplete from '../../icon/circle-check-solid.svg'




//建立狀態 
function RegisterProgress ({text,label,state}){
  return (
    <>
      <span className={styles.progressGroup} data-state= {state}>
         <span className={styles.progressIcon}>
            <span className={styles.text}>{text}</span>
              <img className={styles.cursorPoint} src={circleComplete} alt="circle-complete" />
         </span>
          <span className={styles.progressLabel}>{label}</span>
      </span>
    </>
  )
}




export default function Register({displayer1, displayer2 ,displayer3, order}){
  return (
    <section className={`${styles.productContainer} col col-lg-6 col-sm-12 `}>
        <h2 className={`${styles.registerTitle} col col-12`}>結帳</h2>
      <section className={`${styles.progressContainer} col col-12`}>
          <RegisterProgress 
              text= "1"
              label= "寄送地址"
              state={displayer1} 
            />
          <span className={styles.progressBar} data-order={true}></span>
          <RegisterProgress 
              text= "2"
              label= "運送方式"
              state={displayer2}   
            />
          <span className={styles.progressBar} data-order={order}></span>
          <RegisterProgress 
              text= "3"
              label= "付款資訊"
              state={displayer3}  
            />
      </section>
    </section>
  )
}