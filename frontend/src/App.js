import "./App.css";
import { Route, useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Announcebar from "./components/Announcebar";
import RecipeForm from "./components/RecipeForm";
import Compare from "./Pages/Compare";
import RecipeList from "./components/RecipeList";
import axios from "axios";
import { Link } from "react-router-dom";
import BrandItem from "./components/BrandItem";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [childFirstName, setChildFirstName] = useState("");
  const [childLastName, setChildLastName] = useState("");
  const [allergies, setAllergies] = useState([]);
  const [allergenList, setAllergenList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [tempAllergies, setTempAllergies] = useState(["milk"]);

  const history = useHistory();

  const getAllergies = () => {
    axios
      .get("https://60f5adf918254c00176dffc8.mockapi.io/api/v1/allergens/")
      .then((res) => {
        res.data.forEach((item) => {
          setAllergenList((allergenList) => [
            ...allergenList,
            <option value={item.name}>{item.name}</option>,
          ]);
        });
      });
  };

  useEffect(() => {
    getAllergies();
  }, []);

  const getRecipes = () => {
    axios
      .get("https://60f5adf918254c00176dffc8.mockapi.io/api/v1/recipes/")
      .then((res) => {
        setRecipes(res.data);
      });
  };
  const sendRecipes = () => {
    axios
      .post("/api/recipes-list/", { recipes: recipes })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getRecipes();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // sendRecipes();
    let newCustomer = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      child_first_name: childFirstName,
      child_last_name: childLastName,
      allergies: allergies.join(","),
    };
    await axios
      .post("/api/customers/", newCustomer)
      .then((res) => {
        history.push("/recipes");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const newCustomerForm = (
    <form className="form__content__form" onSubmit={handleSubmit}>
      <label>
        *First Name
        <input
          name="first name"
          type="name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </label>

      <label>
        *Last Name
        <input
          name="last name"
          type="name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </label>
      <label>
        *Email
        <input
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>

      <label>
        *Child First Name
        <input
          name="child first name"
          type="name"
          value={childFirstName}
          onChange={(e) => setChildFirstName(e.target.value)}
          required
        />
      </label>
      <label>
        *Child Last Name
        <input
          name="child last name"
          type="name"
          value={childLastName}
          onChange={(e) => setChildLastName(e.target.value)}
          required
        />
      </label>
      <label>
        What allergies does your child have?
        <select
          onChange={(e) => {
            return setAllergies((allergies) => [...allergies, e.target.value]);
          }}
        >
          <option value="none" selected disabled hidden>
            Select an Option
          </option>
          {allergenList}
        </select>
      </label>
      <button type="submit">Show Recipes</button>
    </form>
  );

  // checking selected allergens on filter

  return (
    <div className="container">
      <header className="container__header">
        <Announcebar />
        <Header />
      </header>
      <Route
        exact
        path="/"
        render={(props) => {
          return (
            <RecipeForm
              handleSubmit={handleSubmit}
              firstName={firstName}
              lastName={lastName}
              email={email}
              childFirstName={childFirstName}
              childLastName={childLastName}
              allergies={allergies}
              allergenList={setAllergenList}
              newCustomerForm={newCustomerForm}
            />
          );
        }}
      />
      <Route
        exact
        path="/recipes"
        render={(props) => {
          return <RecipeList recipes={recipes} allergies={allergies} />;
        }}
      />
            <Route
        exact
        path="/compare"
        render={(props) => {
          return <Compare recipes={recipes} allergies={allergies} />;
        }}
      />
    </div>
  );
}

export default App;
