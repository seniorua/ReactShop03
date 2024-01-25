import { useState } from "react";

export const Wares = (props) => {
  // console.log(props.ware);
  const [amount, setAmount] = useState(0);
  const [isFavorite, setIsFavorite] = useState(props.ware.favorite);
  const minusPress = () => {
    if (amount === 0) return
    setAmount(amount - 1);
    console.log('-')
  }
  const plusPress = () => {
    // Почему нельзя написать amount++
    setAmount(amount + 1);
    console.log('+')
  }
  const addPress = () => {
    console.log('add')
  }

  const favChanche = () => {
    setIsFavorite((prev) => {return !prev})
  }

  return (
    <div className="ware-item">
      <div className={isFavorite ? 'favorite like' : 'favorite'} onClick={favChanche}></div>
      <img src={`/public/assets/pic/${props.ware.pic}`} alt="ware" />
      <h4>{props.ware.producer}</h4>
      <h5>{props.ware.model}</h5>
      <p>{props.ware.price} EUR</p>
      <p>
        {props.ware.avalible ? 'В наличии' : 'Нет в наличии'}
      </p>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}} className="card-buttons">
        <div className="cart-counter">
          <button className="minus" onClick={minusPress}>-</button>
          <div className="amount">{amount}</div>
          <button className="plus" onClick={plusPress}>+</button>
        </div>
        <button className="cart-add" onClick={addPress} style={{padding: '5px 15px'}}>В корзину</button>
      </div>
    </div>
  )
}