import React, { useEffect, useState } from "react";
import "./index.css";
import logo from "../assets/lg.png";
import { Link } from "react-router-dom";
import { useLanguage } from "../LanguageContext";
import { get_all_category } from "../Repo/Apis";


const Header = () => {
  const { selectedLanguage } = useLanguage();
  const [data, setData] = useState([]);
  

   useEffect(() => {
     get_all_category(selectedLanguage, setData);
   }, []);
  return (
    <div>
      <header className="header">
        <nav className="nav">
        <ul>
        {data?.map((i, index) => (
              <>
                <li>
                  <a href={`/category/${i?.id}`} key={index}>
                    {i?.attributes?.name}
                  </a>
                </li>
              </>
            ))}
        </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
