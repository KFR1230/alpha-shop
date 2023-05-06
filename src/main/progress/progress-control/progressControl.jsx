import styles from './ProgressControl.module.scss'
import rightArrow from '../../../icon/right-arrow.svg'

export default function NextStep (){
  return (
    <section className={`${styles.progressContainer} col col-lg-6 col-sm-12`}>
       <section class={`${styles.buttonGroup} col col-12`} data-phase="address">
          <button className={styles.next}>
            下一步 
            {/* <svg class="cursor-point">
              <use xlink:href="#svg-icon-right-arrow"></use>
            </svg> */}
            <img className={styles.rightArrow} src={rightArrow} alt="rightArrow" />
          </button>
        </section>
    </section>
  )
}