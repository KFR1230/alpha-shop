import styles from './Cart.module.scss'
import minusIcon from '../../icon/minus.svg'
import plusIcon from '../../icon/plus.svg'
const cartItems = [
  {
    id: '1',
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 100,
    quantity: 2,
  },
  {
    id: '2',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 200,
    quantity: 1,
  },
]

function AddCartItem ({id,name,img,price,quantity}){
  return (
    <div className={styles.productContainer} id={id}>
      <img className={styles.imgContainer} src={img} />
      <div className={styles.productInfo}>
              <div className={styles.productName}>{name}</div>
              <div className={styles.productControlContainer}>
                <div className={styles.productControl}>
                   <img src = {minusIcon} alt="minus-icon" />
                  <span class="product-count">{quantity}</span> 
                 <img src = {plusIcon} alt="plus-icon" />
                </div>
              </div>  
        <div className={styles.price}>{price}</div>
      </div>
    </div>
  )
}


export default function cartContent(){
  return(
    <>
      <section className={`${styles.cartContainer} col col-lg-5 col-sm-12`}>
          <h3 className={styles.title}>購物籃</h3>
        
        <section className={`${styles.productList} col col-12 `} data-total-price="0" >
          {cartItems.map((item)=>
            <AddCartItem {...item} key={item.id}/>        
          )}
        </section>

          <section className={`${styles.cartInfo} shipping col col-12`}>
            <div class="text">運費</div>
            <div class="price">免費</div>
          </section>
          <section  className={`${styles.cartInfo} total col col-12`}>
            <div class="text">小計</div>
            <div class="price">$ 999</div>
          </section>
        </section>
    </>
  )
}