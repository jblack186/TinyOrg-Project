import React, {useState, useEffect} from "react";
import '../css/Modal.scss';
import axios from "axios";
import mockData from "../brandJSON";

function Modal(props) {
  const [sodium, setSodium] = useState()
  const [sugar, setSugar] = useState()
  const [brandItem, setBrandItem] = useState()
console.log(props.id)
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
  // console.log('data', data)
  // setBrandItem(data);

    

    // const timer = setTimeout(() => {

    //   }, 3000);
    // return () => clearTimeout(timer);
  }, [])

  console.log('brand', brandItem && brandItem.nutrition.nutrients.find(item => item.title === "Sodium" ))

  let sodiumAmount = brandItem && brandItem.nutrition.nutrients.find(item => (item.title && item.name === "Sodium") )

  let sugarAmount = brandItem && brandItem.nutrition.nutrients.find(item => item.title && item.name === "Sugar" )
console.log(sodium)
  return (
    <div className="modal-container">
      <div className="modal">
      <h2>{props.name}</h2>
      <p>Sodium: {sodium && sodium.amount}</p>
      <p>Sugar: {sugar && sugar.amount}</p>

      <p></p>
      </div>
    </div>
  )
}

export default Modal;