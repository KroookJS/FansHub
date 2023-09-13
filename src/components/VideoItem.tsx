import { FC, useRef } from "react";
import styles from "./Swiper.module.css";

interface VideoItemParams {
  video: string;
  author: string;
  description: string;
}

export const VideoItem: FC<VideoItemParams> = ({
  video,
  author,
  description,
}) => {
  const refVideo = useRef<HTMLVideoElement>(null);

  function playPause() {
    if (refVideo.current?.paused) refVideo.current.play();
    else refVideo.current?.pause();
  }
  return (
    <>
      <video
        ref={refVideo}
        onClick={() => playPause()}
        style={{ background: "black" }}
        width={"100%"}
        height={"100%"}
        className={styles.videoItem}
        /* controls={true} */
        loop={true}
        src={video}
        /* onPlaying={() => refVideo.current?.play()} */
      />

      <div className={styles.containerTitle}>
        <img
          src="https://i.pinimg.com/736x/24/8b/10/248b100e15ddc517c6e31b6aee7df07f.jpg"
          alt="ava"
          className={styles.avatar}
        />
        <div>
          <p>@{author}</p>
          <span>{description}</span>
        </div>
      </div>
    </>
  );
};
