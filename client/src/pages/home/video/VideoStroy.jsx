import axios from "axios";
import { useEffect, useState } from "react";
import Stories from "react-insta-stories";
import { useParams } from "react-router-dom";

const VideoStroy = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  const Auth = {
    headers: {
      Authorization:
        "Bearer 7b3265193e957da489d0b7f9f91f01246a794538d37b79f537ed17efc7dea768836c62174907bb299f9fc2a5f9575d9917d321f165a575570dcf34bf40a26979bfc3300c25f6bbfdbc99db6a9c9ed8d9a4a6dcda1a17acf7c5aece5bc553f68d0af16eea79fdfe18383f41f6506a6602308ee2a7cde9252fc712d9cd71b64e61",
    },
  };

  const fetchdata = async () => {
    try {
      const { data } = await axios.get(
        `http://45.126.126.209:1337/api/lives/${id}?populate=*`,
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
      url: `http://45.126.126.209:1337${data?.attributes?.videos?.data?.[0]?.attributes?.url}`,
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
