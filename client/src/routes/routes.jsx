import App from "../App";
import ErrorPage from "../routes/ErrorScreen";
import Home from "../pages/home/Home";
import Radio from "../pages/radio/Radio";
import { createBrowserRouter } from "react-router-dom";
import Story from "../pages/home/stories/imageStories";
import Reels from "../pages/home/LifeHack/Reels";
import { Gaon_Tv } from "../pages/gaon-tv/Gaon_Tv";
import { Gaon_Broadcast } from "../pages/gaon-broadcast/Gaon_Broad";
import { Gaon_Audio } from "../pages/gaon-audio/Gaon_Audio";
import Gardening from "../pages/gardnening/gardening";
import ChangeMaker from "../pages/changeMaker/changeMaker";
import VideoStroy from "../pages/home/video/VideoStroy";
import Podcast from "../pages/podcast/podcast";
import SurveyReport from "../pages/surveyReport/survey";
import Category from "../pages/Category/Category";
import AllStories from "../pages/home/stories/AllStories";
import SingleCat from "../pages/blogs/SingleCat";
import Author from "../pages/author/singleAuthor";
import AuthorStory from "../pages/author/author";
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
        path: "/reels",
        element: <Reels />,
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
        path: "/gaon-audio",
        element: <Gaon_Audio />,
      },
      // {
      //   path: "/kisaan-connection",
      //   element: <Daily />,
      // },
      // {
      //   path: "/kisaan-connection/:id",
      //   element: <Blogs />,
      // },
      // {
      //   path: "/aamdani-bhadaye",
      //   element: <Social />,
      // },
      // {
      //   path: "/aamdani-bhadaye-item/:id",
      //   element: <SingleSocial />,
      // },
      // {
      //   path: "/teacher-connection",
      //   element: <Challenge />,
      // },
      // {
      //   path: "/teacher-connection/:id",
      //   element: <SingleChallenge />,
      // },
      {
        path: "/the-changemakers",
        element: <Gardening />,
      },
      {
        path: "/change-maker",
        element: <ChangeMaker />,
      },
      // {
      //   path: "/the-changemakers/:id",
      //   element: <SingleGardening />,
      // },
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
      {
        path: "/creator/:id",
        element: <Author />,
      },
      {
        path: "/Author-story/:id",
        element: <AuthorStory />,
      },
    ],
  },
]);
