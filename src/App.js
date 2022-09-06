import Todo from "./components/Todo";
import "./App.css";
import Counter from "./components/Counter";
import React, { useState } from "react";

//Conditional rendering...
function Loader() {
  return <p>Loading...</p>;
}
function Content() {
  return (
    <p className="content">
      React is a javascript library for creating User Interface. React uses JSX
      to create html whose element are rendered on the root component
    </p>
  );
}

function PropsLearn({ color, brand, year }) {
  return <div className="car">{`${color} ${brand} ${year}`}</div>;
}
//Using an array to get list and create component
//Different props way of usage
//list of fruits
function Fruits({ fruits }) {
  return (
    <>
      <div className="fruit">{`${fruits.fav} ${fruits.likes}`}</div>
    </>
  );
}

function App() {
  const data = {
    brand: "Ford",
    color: "White",
    year: 2020,
  };
  const fruits = [
    { id: 1, fav: "Orange", likes: true },
    { id: 2, fav: "Apple", likes: false },
  ];
  const fruitLists = fruits.map((fruit) => {
    return <Fruits fruits={fruit} />;
  });
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 5000);

  return (
    <div className="app-container">
      <Todo name="This is first todo list" />
      <Todo name="This is second todo list" />
      <Todo name="This is third todo list" />
      <Counter />
      <div>{loading ? <Loader /> : <Content />}</div>
      <PropsLearn {...data} />
      <div key={fruits.id}>{fruitLists}</div>
    </div>
  );
}

export default App;
