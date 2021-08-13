import React, { useState, useEffect } from "react";
import "../css/Form.scss";
import Baby from '../img/baby-eating.jpeg';

const RecipeForm = (props) => {
  return (
    <div className="form">
      <img className="form__image" src={Baby} alt="baby eating" />
      <div className="form__content">
        <h1 className="form__content__heading">
          Build your little one's <br /> personalized menu.
        </h1>
        <p className="form__content__body">
          View recommended recipes, meal plans and pricing. Don't worry, this
          takes less than 60 seconds.
        </p>
        {props.newCustomerForm}
      </div>
      <div className="form__allergies">
      {props.allergies && props.allergies.map(item => {
        return <p className="form__allergies__item">{item}!</p>
      })}
      </div>
    </div>
  );
};

export default RecipeForm;
