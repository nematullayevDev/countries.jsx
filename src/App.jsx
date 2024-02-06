import { useState } from "react";
import Header from "./Header";
import Search from "./Search";
import { useEffect } from "react";
import Page from "./page";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Url = "https://frontend-mentor-apis-6efy.onrender.com/countries";

function App() {
  const [posts, setPost] = useState([]);
  const [search, setSearch] = useState("");

  const getApiUrl = async () => {
    const res = await fetch(Url);
    const datas = await res.json();
    setPost(datas.data);
  };
  console.log(posts);

  useEffect(() => {
    getApiUrl();
  }, []);

  // search

  console.log(search);
  const searchBtn = (data) => {
    return data.filter((item) =>
      item.first_name.toLowerCase().includes(search)
    );
  };

  // onClick
  const hendle = (e) => {
    console.log(e);
  };

  return (
    <>
      <div className="container">
        <Header />,
        <BrowserRouter>
          <Routes>
            <Route path="/page" element={<Page />} />
          </Routes>
          <main className="main">
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

            <ul className="mainUl">
              {posts
                .filter((post) => {
                  return search.toLowerCase() === ""
                    ? post
                    : post.name.common.toLowerCase().includes(search);
                })
                .map((post) => {
                  return (
                    <li className="mainLi" key={post.id}>
                      <Link to="/page">
                        <img
                          className="imgFlag"
                          src={post.flags.svg}
                          alt=""
                          onClick={hendle()}
                        />
                      </Link>

                      <div className="abautCountr">
                        <h2 className="countName">{post.name.common}</h2>
                        <div className="wordCount">
                          <p className="population">
                            Population:
                            <span className="wordSpan"> {post.population}</span>
                          </p>
                          <p className="population">
                            Region:{" "}
                            <span className="wordSpan">{post.region}</span>
                          </p>
                          <p className="population">
                            Capital:{" "}
                            <span className="wordSpan">{post.capital}</span>
                          </p>
                        </div>
                      </div>
                    </li>
                  );
                })}
            </ul>
          </main>
        </BrowserRouter>
        {/* <Page/>  */}
      </div>
    </>
  );
}

export default App;
