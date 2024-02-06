import { useState } from "react";
import { Form } from "react-router-dom";

function Search() {
  const [search, setSearch] = useState("");
  console.log(search);
  const searchBtn = (data) => {
    return data.filter((item) =>
      item.first_name.toLowerCase().includes(search)
    );
  };

  return (
    <div className="searDiv">
      <form className="searchinpDiv">
        <img className="searchImg" src="../search.svg" alt="" />
        <input
          className="search"
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search for a country…"
        />
      </form>
      <div className="selectdiv">
        <select name="" id="" className="select">
          <option value="Africa" className="options">
            Africa
          </option>
          <option value="America" className="options">
            America
          </option>
          <option value="Asia" className="options">
            Asia
          </option>
          <option value="Europe" className="options">
            Europe
          </option>
          <option value="Oceania" className="options">
            Oceania
          </option>
        </select>
      </div>
    </div>
  );
}

export default Search;
