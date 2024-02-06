import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Page = () => {
  const [country, setCountry] = useState([]);
 
  
  useEffect(() => {
    const getCountry = async () => {
      try {
        const response = await fetch("https://restcountries.com/v2/all");
        const data = await response.json();
        setCountry(data[0]);
      } catch (error) {
        console.log("Xatolik yuz berdi:", error);
      }
    };
    console.log(country);
    getCountry();
  }, []);

  return (
    <div className="pageContainer">
      <div className="pageMain">
        <Link to="/page">
          <button className="backBtn">{"<"} Orqaga</button>
        </Link>
        <div className="pageCount">
          <img className="pageFlag"  src={country.flag} alt="" />
          <div className="pageWrap">
            <h2 className="pageCountName">{country.name}</h2>
            <div className="pageULLI">
              <ul className="page1UL">
                <li className="population">
                  Asl Nom:{" "}
                  <span className="wordSpan">{country.nativeName}</span>
                </li>
                <li className="population">
                  Aholi: <span className="wordSpan">{country.population}</span>
                </li>
                <li className="population">
                  Mintaqasi: <span className="wordSpan">{country.region}</span>
                </li>
                <li className="population">
                  Tagishtirilgan Mintaqasi:{" "}
                  <span className="wordSpan">{country.subregion}</span>
                </li>
                <li className="population">
                  Poytaxti: <span className="wordSpan">{country.capital}</span>
                </li>
              </ul>

              <ul className="page2Ul">
                <li className="population">
                  Yuqori Daraja Domeni:{" "}
                  <span className="wordSpan">{country.topLevelDomain}</span>
                </li>
                <li className="population">
                  Valyutalar:{" "}
                  <span className="wordSpan">
                    {country.currencies?.[0]?.name}
                  </span>
                </li>
                <li className="population">
                  Tillar:{" "}
                  {country.languages?.map((language, index) => (
                    <span className="wordSpan" key={index}>
                      {language.name}
                      {index !== country.languages.length - 1 && ", "}
                    </span>
                  ))}
                </li>
              </ul>
            </div>

            <div className="pageFooter">
              <h3 className="borderCountres">Chegara Mamlakatlar: </h3>
              <button className="bordercountBtn">France</button>
              <button className="bordercountBtn">Germany</button>
              <button className="bordercountBtn">Netherlands</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
