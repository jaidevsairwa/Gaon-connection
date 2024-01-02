import axios from "axios";
import { useEffect, useState } from "react";
import Stories from "react-insta-stories";
import { useParams } from "react-router-dom";

const VideoStroy = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const base = import.meta.env.VITE_BASE_URL;
  const Auth = {
    headers: {
      Authorization:
        `Bearer ${import.meta.env.VITE_TOKEN}` ,
    },
  };

  const fetchdata = async () => {
    try {
      const { data } = await axios.get(
        `${base}/api/stories/${id}?populate=*`,
        Auth
      );
      setData(data.data);
    } catch {}
  };


  useEffect(() => {
    fetchdata();
  }, [id]);

  const images = [
    {
      url: `${import.meta.env.VITE_BASE_URL}/${data?.attributes?.videos?.data?.[0]?.attributes?.url}`,
      type: "video",
    },
  ];

  return (
    <div className="stories">
      <Stories
        stories={images}
        defaultInterval={1500}
        width={400}
      />
     </div>
  );
};

export default VideoStroy;
