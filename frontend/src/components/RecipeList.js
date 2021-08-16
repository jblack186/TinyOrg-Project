import React, { useState, useEffect } from "react";
import "../css/RecipeList.scss";
import axios from "axios";
import svgBaby from "../img/baby-boy.svg";
import Danger from "../img/danger.svg";
import Ribbon from "../img/ribbon-for-an-angle.svg";

const RecipeList = (props) => {
  const [recipes, setRecipes] = useState([]);
  const [allergies, setAllergies] = useState(props.allergies);
  const [loading, setLoading] = useState(true);

  function checkAllergy(allRecipes) {
    const safeRecipes = allRecipes.filter(
      (recipe) =>
        !recipe.allergens.find((allergy) => allergies.includes(allergy))
    );
    return safeRecipes;
  }

  useEffect(() => {
    axios
      .get("/api/recipes-list/")
      .then((res) => {
        let safeRecipes = checkAllergy(props.recipes);
        console.log("safe", safeRecipes);
        setRecipes(safeRecipes);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props]);
  console.log("recipes", recipes);
  console.log("allergies", allergies);

  return (
    <div className="list">
      <div className="list__box">
        {recipes.map((item) => {
          return (
            <div
              className={`list__box__allergies list__box__allergies--${item.id}`}
            >
              <img
                className="list__box__allergies__img list__box__allergies__img--ribbon"
                src={Ribbon}
                alt="ribbon"
              />
              <img
                className="list__box__allergies__img"
                src={svgBaby}
                alt="baby"
              />
              <h3 className="list__box__allergies__heading">{item.name}</h3>
              <div className="list__box__allergies__body">
                <img
                  className="list__box__allergies__img list__box__allergies__img--danger"
                  src={Danger}
                  alt="danger"
                />
                {item.allergens.length > 0 ? (
                  item.allergens.map((allrgy) => {
                    return <p>{allrgy}</p>;
                  })
                ) : (
                  <p>none</p>
                )}
              </div>
              <button
                className={`list__box__allergies__button list__box__allergies__button--${item.id}`}
              >
                Learn More
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecipeList;
