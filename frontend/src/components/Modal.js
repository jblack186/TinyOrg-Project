import React, {useState, useEffect} from "react";
import '../css/Modal.scss';
import axios from "axios";

function Modal(props) {
  const [sodium, setSodium] = useState()
  const [sugar, setSugar] = useState()
  const [brandItem, setBrandItem] = useState()
  
  useEffect(() => {
    axios.get(`https://api.spoonacular.com/food/products/${props.id}?apiKey=${process.env.REACT_APP_API_KEY}`)
    .then(res => {
console.log('res', res)
   
      let sodiumData = res.data.nutrition.nutrients.find(item => {

        return item.name && item.title === "Sodium"
      })
      let sugarData = res.data.nutrition.nutrients.find(item => {

        return item.name && item.title === "Sugar"
      })
      setSodium(sodiumData)
      setSugar(sugarData)

    })
  }, [])

  console.log('brand', brandItem && brandItem.nutrition.nutrients.find(item => item.title === "Sodium" ))

  let sodiumAmount = brandItem && brandItem.nutrition.nutrients.find(item => (item.title && item.name === "Sodium") )

  let sugarAmount = brandItem && brandItem.nutrition.nutrients.find(item => item.title && item.name === "Sugar" )
console.log(sodium)
  return (
    <div className="modal-container">
      <div className="modal">
        <div className="modal__content">
      <h3>{props.name}Gerber 2nd Foods Organic Baby Food Pear Spinach</h3>
      <div>
      <h4>Sodium: {sodium && sodium.amount}</h4>
            {sodium ? sodium.amount < 20 ? <p style={{color: 'green', fontWeight: 'bolder'}}>Low</p> : sodium.amount > 20 && sodium.amount < 40 ? <p style={{color: 'orange', fontWeight: 'bolder'}}>Moderately high</p> : <p style={{color: 'red', fontWeight: 'bolder'}}>High</p> : null}
            </div>
            <div>
      <h4>Sugar: {sugar && sugar.amount}</h4>
      {sugar ? sugar.amount < 5 ? <p style={{color: 'green', fontWeight: 'bolder'}}>Low</p> : sugar.amount > 10 && sugar.amount < 15 ? <p style={{color: 'orange', fontWeight: 'bolder'}}>Moderately high</p> : <p style={{color: 'red', fontWeight: 'bolder'}}>High</p> : null}
      </div>
      <p>Is this a product you purchase for your little one?</p>
      <button className="modal__content__button modal__content__button--no">No</button><button className="modal__content__button modal__content__button--yes">Yes</button>
      </div>
      </div>
    </div>
  )
}

export default Modal;