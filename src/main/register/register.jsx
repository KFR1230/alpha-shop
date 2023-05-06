import styles from './Register.module.scss'
import circleComplete from '../../icon/circle-check-solid.svg'

function RegisterProgress ({text,label}){
  return (
    <>
      <span className={styles.progressGroup}data-phase="address">
         <span className={styles.progressIcon}>
            <span className={styles.text}>{text}</span>
              <img className={styles.cursorPoint} src={circleComplete} alt="circle-complete" />
         </span>
          <span className={styles.progressLabel}>{label}</span>
      </span>
    </>
  )
}




export default function Register(){
  return (
    <section className={`${styles.productContainer} col col-lg-6 col-sm-12 `}>
        <h2 className={`${styles.registerTitle} col col-12`}>結帳</h2>
      <section className={`${styles.progressContainer} col col-12`}>
          <RegisterProgress 
              text= "1"
              label= "寄送地址"
            />
          <span className={styles.progressBar} data-order="2"></span>
          <RegisterProgress 
              text= "2"
              label= "運送方式"
            />
          <span className={styles.progressBar} data-order="3"></span>
          <RegisterProgress 
              text= "3"
              label= "付款資訊"
            />
      </section>
    </section>
  )
}