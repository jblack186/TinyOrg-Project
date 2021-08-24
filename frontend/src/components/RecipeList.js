import React, { useState, useEffect } from "react";
import "../css/RecipeList.scss";
import axios from "axios";
import svgBaby from "../img/baby-boy.svg";
import Danger from "../img/danger.svg";
import Ribbon from "../img/ribbon-for-an-angle.svg";

const RecipeList = (props) => {
  const [recipes, setRecipes] = useState([]);
  const [allergies, setAllergies] = useState(props.allergies);

  // this function's one parameter is for a list of recipes to be passed in as an argument. From there this list will be filtered and through the find method it will check if that instances allergens array has a value that is also in the "allergies" state. If it is not then then it will be return to be rendered in the JSX below through the "recipes" state
  function checkAllergy(allRecipes) {
    const safeRecipes = allRecipes.filter(
      (recipe) =>
        !recipe.allergens.find((allergy) => allergies.includes(allergy))
    );
    return safeRecipes;
  }
// grabbing the recipes from database and passing that list as an argument to the checkAllergy function to filter only recipes that the parent's child is not allergic to
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
