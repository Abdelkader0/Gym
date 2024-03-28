import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import Menu from "./Components/Menu";
import NewsGrid from "./Components/NewsGrid";
import { useLocation } from "react-router-dom";
import "./News.css";

function News({ setActiveLink }) {
  const location = useLocation();
  const [items, setItems] = useState([]);
  const [active, setActive] = useState(1);
  const [category, setCategory] = useState("sports");

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=f08e753c01754892a375d8705f02c420&category=${category}`
    )
      .then((res) => res.json())
      .then((data) => {
        setItems(data.articles);
        console.log("data", data.articles);
      }, console.log("items", items));
  }, [category]);
  //   console.log("items",items);
  //  console.log("category",category);
  return (
    <div className="App">
      <Header />
      <Menu active={active} setActive={setActive} setCategory={setCategory} />
      <NewsGrid items={items} /> {/* Pass news items to NewsGrid */}
    </div>
  );
}

export default News;
