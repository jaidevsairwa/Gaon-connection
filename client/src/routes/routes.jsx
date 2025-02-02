import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../routes/ErrorScreen";
import Home from "../pages/home/Home";
import Story from "../pages/home/stories/imageStories";
import Reels from "../pages/home/LifeHack/Reels";
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
