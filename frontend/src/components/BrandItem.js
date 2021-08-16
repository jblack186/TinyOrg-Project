import React from "react";
import '../css/BrandItem.scss';
import Logo from '../img/logo.png';
import Eye from '../img/view.svg';

function BrandItem(props) {

  let text = props.title
  let maxSize = 50
  let sizeString = text
  if(text.length > maxSize ){
    sizeString = text.substring(0, maxSize)
    sizeString += "..."
}

  return (
    <div className="brand-item">
      <div className="brand-item__box">
         <img className="brand-item__box__img"src={props.image} alt="brand food" />
  <h4 className="brand-item__box__heading">{sizeString}</h4>
         <button><img src={Eye} alt="eye" /></button>
         </div>
    </div>
  )
}

export default BrandItem;