import { useRef } from "react";
import styles from "./Swiper.module.css";

export const VideoItem = ({ video }: { video: string }) => {
  const refVideo = useRef<HTMLVideoElement>(null);

  function playPause() {
    if (refVideo.current?.paused) refVideo.current.play();
    else refVideo.current?.pause();
  }
  return (
    <video
      ref={refVideo}
      onClick={() => playPause()}
      style={{ background: "black" }}
      width={"100%"}
      height={"100%"}
      className={styles.videoItem}
      /* controls={true} */
      loop={true}
      src={`/src/assets/${video}.mp4`}
      /* onPlaying={() => refVideo.current?.play()} */
    />
  );
};
