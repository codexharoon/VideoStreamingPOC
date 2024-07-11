import { useRef } from "react";
import "./App.css";

import VideoPlayer from "./VideoPlayer";

function App() {
  const playerRef = useRef(null);

  const videoURI =
    "http://localhost:8000/uploads/course/dc94c194-b45a-458a-9923-db960830ee99/index.m3u8";

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: videoURI,
        type: "application/x-mpegURL",
      },
    ],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };

  return (
    <>
      <VideoPlayer options={videoJsOptions} onReady={handlePlayerReady} />
    </>
  );
}

export default App;
