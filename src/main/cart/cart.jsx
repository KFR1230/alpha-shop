import styles from './Cart.module.scss'
import minusIcon from '../../icon/minus.svg'
import plusIcon from '../../icon/plus.svg'
import {useContext} from 'react'
import {cartContext} from './cartContext.js'







function AddCartItem ({id,name,img,price,quantity}){
  const {handleProduct} = useContext(cartContext)
  
  return (
    <div className={styles.productContainer} id={id}>
      <img className={styles.imgContainer} src={img} />
      <div className={styles.productInfo}>
              <div className={styles.productName}>{name}</div>
              <div className={styles.productControlContainer}>
                <div className={styles.productControl}>
                   <img src = {minusIcon} alt="minus-icon" data-value ={-1} onClick={(e)=>handleProduct(id,Number(e.target.dataset.value))}/>
                  <span className="product-count">{quantity}</span> 
                 <img src = {plusIcon} data-value ={1} alt="plus-icon" 
                 onClick={(e)=>handleProduct(id,Number(e.target.dataset.value))}/>
                 </div> {/*  原本想用 value ={1} 但這邊使用的是img 所以不會有value  */}
              </div>  
        <div className={styles.price}>${price * quantity}</div>
      </div>
    </div>
  )
 }


export default function CartContent(){
  const {cart,TotalAmount} = useContext(cartContext)

  return(
      <section className={`${styles.cartContainer} col col-lg-5 col-sm-12`}>
          <h3 className={styles.title}>購物籃</h3>
    
        <section className={`${styles.productList} col col-12 `} data-total-price="0" >
          {cart.map((item)=>
            <AddCartItem {...item} key={item.id}/>        
          )}
        </section>

          <section className={`${styles.cartInfo} shipping col col-12`}>
            <div className="text">運費</div>
            <div className="price">免費</div>
          </section>
          <section  className={`${styles.cartInfo} total col col-12`}>
            <div className="text">小計</div>
            <div className="price">$ {TotalAmount()}</div> 
          </section>
        </section>
  )
}

 