import App from "../App";
import ErrorPage from "../routes/ErrorScreen";
import Home from "../pages/home/Home";
import Radio from "../pages/radio/Radio";
import { createBrowserRouter } from "react-router-dom";
import Story from "../pages/home/stories/imageStories";
import Reels from "../pages/home/LifeHack/Reels";
import { Gaon_Tv } from "../pages/gaon-tv/Gaon_Tv";
import { Gaon_Broadcast } from "../pages/gaon-broadcast/Gaon_Broad";
import Gardening from "../pages/gardnening/gardening";
import ChangeMaker from "../pages/changeMaker/changeMaker";
import VideoStroy from "../pages/home/video/VideoStroy";
import Podcast from "../pages/podcast/podcast";
import SurveyReport from "../pages/surveyReport/survey";
import Category from "../pages/Category/Category";
import AllStories from "../pages/home/stories/AllStories";
import SingleCat from "../pages/blogs/SingleCat";
import WebStories from "../components/Canvas/WebStories";
import AllHack from "../pages/home/LifeHack/AllHack"

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/web-stories/:id",
        element: <WebStories />,
      },
      {
        path: "/reels",
        element: <Reels />,
      },
      {
        path: "/story/:id",
        element: <Story />,
      },
      {
        path: "/all-stories",
        element: <AllStories />,
      },
      {
        path: "/radio",
        element: <Radio />,
      },
      {
        path: "/gaon-tv",
        element: <Gaon_Tv />,
      },
      {
        path: "/gaon-broadcast",
        element: <Gaon_Broadcast />,
      },
      {
        path: "/the-changemakers",
        element: <Gardening />,
      },
      {
        path: "/change-maker",
        element: <ChangeMaker />,
      },
      {
        path: "/video-story/:id",
        element: <VideoStroy />,
      },
      {
      path: "/all-hacks",
      element: <AllHack />
      },
      {
        path: "/podcast",
        element: <Podcast />,
      },
      {
        path: "/survey-report",
        element: <SurveyReport />,
      },
      {
        path: "/category/:id",
        element: <Category />,
      },
      {
        path: "/indi-category/:id",
        element: <SingleCat />,
      },
    ],
  },
]);
