import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";

import { Data } from "../data";
import { IVideo } from "../type/type";

import { VideoItem } from "./VideoItem";

export const SwiperComponent = () => {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        style={{ overflow: "hidden", height: "100vh" }}
      >
        {Data.map((el: IVideo) => {
          return (
            <SwiperSlide style={{ height: "100vh" }}>
              <VideoItem
                key={el.video}
                video={el.video}
                author={el.author}
                description={el.description}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
