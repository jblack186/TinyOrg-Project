import React, { useState} from "react";
import "../css/Compare.scss";
import BrandItem from "../components/BrandItem";
import Modal from "../components/Modal";
import mockData from "../brandJSON";
import Escape from '../img/close.svg';
import axios from "axios";


const Compare = () => {
  const [brandChoice, setBrandChoice] = useState("");
  const [brandId, setBrandId] = useState();

  function babyBrand(e) {
    e.preventDefault()
    // setBrandChoice(e.target.value)
      axios.get(`https://api.spoonacular.com/food/products/search?apiKey=${process.env.REACT_APP_API_KEY}&query=${e.target.value || "gerber"}`)
      .then((res) => {
        console.log("respose", res);
        setBrandChoice(res.data.products)
      })
      .catch((err) => {
        console.log("err", err);
      });
  }

   function resetBrand() {
    setBrandId("");
    console.log(brandId)
  }


  return (
    <div className="compare">
      <section className="compare__text">
     {brandId && <img onClick={resetBrand} className="escape" src={Escape} alt="escape" />}
        <h3>Tiny O products contain no added sugars or salt.</h3>
        <p>
          Can your go-to brands say the same? Click one of these popular brands
          to check.
        </p>
      </section>
      <section className="compare__buttons">
        <button onClick={babyBrand} value="Gerber">
          Gerber
        </button>
        <button onClick={babyBrand} value="Beech Nut Baby Food">
          Beech Nut
        </button>
        <button onClick={babyBrand} value="Plum baby food">
          Plum
        </button>
        <button onClick={babyBrand} value="Earths Best Baby Foods">
          Earth's Best Baby Foods
        </button>
      </section>
      <section className="compare__brand-items">
        {brandChoice && brandChoice.map((item) => {
          return (
            <div
              onClick={() => {
                setBrandId(item.id);
              }}
              className="compare__brand-items__flex"
            >
              <BrandItem title={item.title} image={item.image} />
              {brandId === item.id ? <Modal name={item.title} resetBrand={resetBrand} escape={escape} id={item.id} /> : null}
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Compare;
