import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import SideBar from "./SideBar";
import Recommend from "./recommended";
import Movies from "./Movies";
import Trending from "./trending";
import Search from "./Search";
import { useState } from "react";
import data from "./data";

function App() {
  const [searchResult, setSearchResult] = useState([]);
  const [keyWord, setKeyword] = useState("");

  console.log(searchResult);

  const handleChange = (keyword) => {
    setKeyword(keyword);
  };

  const handleSearch = () => {
    const result = data.filter((movies) => movies.title === keyWord);
    setSearchResult([...result]);
  };

  return (
    <div className="App">
      <SideBar />
      <Search handleChange={handleChange} handleSearch={handleSearch} />
      

      <Trending />
      <div className="search-results">
        {searchResult.map((item, index) => {
          <div className="item" key={index}>
            <img src={item.img} />
            <div className="item-footer">
              <p>{item.type}</p>
              <h4> {item.title}</h4>
            </div>
          </div>;
        })}
      </div>
      <Routes>
        <Route path="/recommend" element={<Recommend />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </div>
  );
}
export default App;
