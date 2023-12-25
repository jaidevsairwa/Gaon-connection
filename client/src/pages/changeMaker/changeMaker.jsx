import React, { useEffect, useState } from "react";
import "./changeMaker.css";
import ReactMarkdown from "react-markdown";
import axios from "axios";
import img from "../../assets/img.jpg";
import img1 from "../../assets/img1.jpg";

const ChangeMaker = () => {
  const [data, setData] = useState([]);
  const [singledata, setSingledata] = useState({});

  const Auth = {
    headers: {
      Authorization:
        "Bearer e2fb59354010ffcd981795bf4c8da3508bb642866b3ff075560bb46572e400a44fec02a8f50fbac78912d9ba3bbf33280ce27307d71640914cdfd3c47bc0df967963caeed5e04ae64b3adfc47d06f8b1da50563def8ec6bcff9e356a57d98abf53eb83cd5cb50e85c0d1c7c6f74ae37efab00001df93ef8f5ffc4c0071a42ef7",
    },
  };

  const fetchHandler = async () => {
    try {
      const { data } = await axios.get(
        "http://45.126.126.209:1337/api/change-makers?populate=*",
        Auth
      );
      setData(data.data);
      setSingledata(data?.data?.reverse()?.[0]);
    } catch {}
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  const divContainer = {
    display: "flex",
    justifyContent: "space-evenly",
    gap: "20px",
    alignItem: "center",
    flexWrap: "wrap",
    padding: "10px",
  };

  const imgContainer = {
    width: "300px",
    height: "250px",
  };

  return (
    <div>
      <div style={divContainer}>
        <img src={img} alt="" style={imgContainer} />
        <img src={img1} alt="" style={imgContainer} />
      </div>
      <p style={{ textAlign: "center", fontSize: "20px" }}>
        This unique long term project aims to build a one-of-its-kind National
        Registry of Changemakers in the country. From social workers, teachers,
        environmentalists, farmers, artists, to individuals whose work has
        transformed lives will be featured as part of The Changemakers Project.
        Gaon Connection has been building and nurturing connections for the past
        eleven years now. The Changemakers Project is another step in that
        direction. There are hundreds of thousand people out there — the doers —
        whose life mission is to help others. And they often work under extreme
        circumstances with bare minimum resources — financial or material.
      </p>
      <div className="change-maker">
        <div>
          <img
            src={`http://45.126.126.209:1337${singledata?.attributes?.Images?.data?.[0]?.attributes?.url}`}
            alt=""
          />
        </div>
        <div className="maker-text">{singledata?.attributes?.Desc}</div>
      </div>
      <div className="article_div">
        <div className="article_body">
          <h4 style={{ color: "black" }}>The Change Makers Project</h4>
          {data?.map((i, index) => (
            <div
              className="article_card"
              key={index}
              style={{ fontFamily: "Poppins" }}
            >
              <img
                src={`http://45.126.126.209:1337${i?.attributes?.Images?.data?.[0]?.attributes?.url}`}
                alt=""
              />
              <div className="article_content">
                <a className="heading-title">{i?.attributes?.Title} </a>
                <p className="heading-article">
                  <ReactMarkdown>
                    {i?.attributes?.Desc?.slice(0, 300)}
                  </ReactMarkdown>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ChangeMaker;
