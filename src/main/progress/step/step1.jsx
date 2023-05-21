
import styles from './Step1.module.scss'
import CreateOption from './createOption.jsx'


export default function ProgressStep1 (){
  const selectGender = [
    {value:"mr",text:"先生",id:1},
    {value:"ms",text:"女士",id:2},
    {value:"mx",text:"未知",id:3}
  ]
    const cities = [
    { value: '', text: '請選擇縣市',id:1 },
    { value: 'KLU', text: '基隆市',id:2 },
    { value: 'TPH', text: '新北市',id:3 },
    { value: 'TPE', text: '臺北市',id:4 },
    { value: 'TYC', text: '桃園市',id:5 },
    { value: 'HSH', text: '新竹縣',id:6 },
    { value: 'HSC', text: '新竹市',id:7 },
    { value: 'MAC', text: '苗栗市',id:8 },
    { value: 'MAL', text: '苗栗縣',id:9 },
    { value: 'TXG', text: '臺中市',id:10 },
    { value: 'CWH', text: '彰化縣',id:11 },
    { value: 'CWS', text: '彰化市',id:12 },
    { value: 'NTC', text: '南投市',id:13 },
    { value: 'NTO', text: '南投縣',id:14 },
    { value: 'YLH', text: '雲林縣',id:15 },
    { value: 'CHY', text: '嘉義縣',id:16 },
    { value: 'CYI', text: '嘉義市',id:17 },
    { value: 'TNN', text: '臺南市',id:18 },
    { value: 'KHH', text: '高雄市',id:19 },
    { value: 'IUH', text: '屏東縣',id:20 },
    { value: 'PTS', text: '屏東市',id:21 },
    { value: 'ILN', text: '宜蘭縣',id:22 },
    { value: 'ILC', text: '宜蘭市',id:23 },
    { value: 'HWA', text: '花蓮縣',id:24 },
    { value: 'HWC', text: '花蓮市',id:25 },
    { value: 'TTC', text: '臺東市',id:26 },
    { value: 'TTT', text: '臺東縣',id:27 },
    { value: 'PEH', text: '澎湖縣',id:28 },
    { value: 'KMN', text: '金門縣',id:29 },
    { value: 'LNN', text: '連江縣',id:30 }
  ]

  return (
    <form className= {`${styles.progressForm} col col-12`} data-phase="address">
      <h3 className={styles.formTitle}>
          寄送地址
       </h3>
    <div className={`col col-12`}>
        <div className={`${styles.inputGroup} input-w-lg-2 input-w-sm-s1`}>
                  <div className={styles.inputLabel}>稱謂</div>
                  <div className={styles.selectContainer}>
                    <select>
                      <CreateOption 
                        array={selectGender}
                      />
                    </select>
                  </div>
                </div>
                <div className={`${styles.inputGroup} input-w-lg-4 input-w-sm-s2`}>
                  <div className={styles.inputLabel}>姓名</div>
                  <input type="text" placeholder="請輸入姓名" />
         </div>
      </div>
      <div className={`col col-12`}>
        <div className={`${styles.inputGroup} input-w-lg-3 input-w-sm-full`}>
                  <div className={styles.inputLabel}>電話</div>
                  <input type="tel" placeholder="請輸入行動電話" />
                </div>
                <div className={`${styles.inputGroup} input-w-lg-3 input-w-sm-full`}>
                  <div className={styles.inputLabel}>Email</div>
                  <input type="email" placeholder="請輸入電子郵件" />
         </div>
      </div>
      <div className={`col col-12`}>
        <div className={`${styles.inputGroup} input-w-lg-2 input-w-sm-full`}>
                  <div className={styles.inputLabel}>城市</div>
                  <div className={styles.selectContainer}>
                    <select required>
                      <CreateOption 
                        array={cities}
                      />
                    </select>
                  </div>
          </div>
        <div className={`${styles.inputGroup} input-w-lg-4 input-w-sm-full`}>
                  <div className={styles.inputLabel}>地址</div>
                  <input type="text" placeholder="請輸入地址" />
        </div>
      </div>
    </form>
  )
}