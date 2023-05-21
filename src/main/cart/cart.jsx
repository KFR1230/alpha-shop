import styles from './Cart.module.scss'
import minusIcon from '../../icon/minus.svg'
import plusIcon from '../../icon/plus.svg'
import {useState} from 'react'


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





function AddCartItem ({id,name,img,price,quantity,handleProduct}){
  
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
  const [cart , setCart] = useState(cartItems);
  function handleProduct(id,value){
    const setQuantity = cart.map((c)=>{
      if(c.id === id ){
        return {
          ...c,
          quantity: (c.quantity + value !== 0)? c.quantity + value : 1 
        }
      }else{
        return c
      }
    })
    
   setCart(setQuantity)
  }
  function TotalAmount (){
    let total = 0
    cart.forEach((c)=>{
      total += c.price * c.quantity
    })
    return total
  }
  return(
      <section className={`${styles.cartContainer} col col-lg-5 col-sm-12`}>
          <h3 className={styles.title}>購物籃</h3>
        
        <section className={`${styles.productList} col col-12 `} data-total-price="0" >
          {cart.map((item)=>
            <AddCartItem {...item} key={item.id} handleProduct={handleProduct}/>        
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

 