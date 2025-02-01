import React, { useEffect, useState } from "react";
import { get_Story, getStoryCategory,get_videoName } from "../../../Repo/Apis";
import { useNavigate } from "react-router-dom";

const AllStories = () => {
  const [story, setStory] = useState([]);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [title, setTitle] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    get_Story(setStory);
    getStoryCategory(setData);
    get_videoName(setTitle);
  }, []);

  const base = `${import.meta.env.VITE_BASE_URL}`;

  const filterData = !query
    ? story
    : story?.filter((i) =>
      i?.attributes?.story_category?.data?.attributes?.category
        ?.toLowerCase()
        ?.includes(query?.toLowerCase())
    );

  return (
    <div>
      <h1 className="imageBox_header">{title.reels}</h1>

      <div className="filteration">
        <ul>
          <li
            className={query === "" ? "active" : ""}
            onClick={() => setQuery("")}
          >
            All
          </li>
          {data?.map((i, index) => (
            <li
              key={index}
              className={query === i?.attributes?.category ? "active" : ""}
              onClick={() => setQuery(i?.attributes?.category)}
            >
              {" "}
              {i.attributes?.category}{" "}
            </li>
          ))}
        </ul>
      </div>
      <div className="story--container-home">
        {filterData?.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(`/story/${item.id}`)}
            style={{ textAlign: "center" }}
          >
            <div
              className="story_container"
              style={{
                backgroundImage: `url(${base}${item?.attributes?.images?.data?.[0]?.attributes?.url})`,
                padding:"20px"
              }}
            ></div>
            <p style={{ color: "red", fontSize: "20px", fontWeight: "700" }}>
              {item?.attributes?.story_category?.data?.attributes?.category}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllStories;
