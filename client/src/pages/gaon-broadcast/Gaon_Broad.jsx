import React from "react";
import { isMobile } from "react-device-detect";
import Contact from "../../components/contact";
import MobileHeader from "../home/Header/header";
import Header from "../../components/header";
import Footer from "../../components/Footer/Footer";
import "./gaonbroad.scss";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export const Gaon_Broadcast = () => {
  const [data, setData] = useState([]);

  const Auth = {
    headers: {
      Authorization:
        "Bearer e2fb59354010ffcd981795bf4c8da3508bb642866b3ff075560bb46572e400a44fec02a8f50fbac78912d9ba3bbf33280ce27307d71640914cdfd3c47bc0df967963caeed5e04ae64b3adfc47d06f8b1da50563def8ec6bcff9e356a57d98abf53eb83cd5cb50e85c0d1c7c6f74ae37efab00001df93ef8f5ffc4c0071a42ef7",
    },
  };

  const fetchHandler = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BASE_URL}//api/geon-podecasts?populate=*`,
        Auth
      );
      setData(data?.data);
    } catch {}
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  return (
    <div className="gaontv-container1">
      {data?.map((i, index) => (
        <div className="card-tv" key={index}>
          <iframe
            src={i.attributes?.link}
            title="video2"
            width="100%"
            height="100%"
            allowFullScreen
          ></iframe>
          <h3> {i.attributes?.Title} </h3>
          <p> {i.attributes?.Desc} </p>
        </div>
      ))}
    </div>
  );
};
