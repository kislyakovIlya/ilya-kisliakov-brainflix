import "./App.scss";
import Header from "./components/Header/Header";
import Video from "./components/Video/Video";
import Main from "./components/Main/Main";
//
import { useState, useEffect } from "react";
import axios from "axios";
//
import VideoList from "./components/VideoList/VideoList";
import { filterVideo } from "./utilities/ulils";

const url = "http://localhost:8080/videos";
const apiKey = "dc0900dd-0f3b-4b59-a50b-938cbd326362";

const defaultVideoId = "84e96018-4022-434e-80bf-000ce4cd12b8";

const defaultDetails = {
  // id: "",
  // title: "",
  // channel: "",
  // image: "",
  // description: "",
  // views: "",
  // likes: "",
  // duration: "",
  // video: "",
  // timestamp: 0,
  // comments: [
  //   {
  //     id: "",
  //     name: "",
  //     comment: "",
  //     likes: 0,
  //     timestamp: 0,
  //   },
  // ],
};


function App() {
  const [currentId, setCurrentId] = useState(defaultVideoId);
  const [videos, setVideos] = useState([]);
  const [videoDetails, setVideoDetails] = useState(defaultDetails);

  useEffect(() => {
    axios
      .get(`${url}`)
      .then((response) => {
        const data = response.data;
        setVideos(filterVideo(data, currentId));
      })
      .catch((error) => error);
  }, [currentId]);

  useEffect(() => {
    const fetchVideoDetails = async () => {
      try {
        await axios.get(`${url}/${currentId}`).then((response) => {
          const data = response.data;
          setVideoDetails(data);
        });
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchVideoDetails();

  }, [currentId]);


  return (
    <div className="App">
      <Header />
      
      {videoDetails.video? <Video video={videoDetails} apiKey={apiKey} /> : "Loading.."}
      <div className="bottomSection">
        <div className="bottomSection__main">
          {videoDetails? <Main video={videoDetails} /> : 'Nothing to display..'}
        </div>
        <div className="bottomSection__videos">
        {videos &&<VideoList videoList={videos} setId={setCurrentId} url={url}/>}
        </div>
      </div>
    </div>
  );
}

export default App;
