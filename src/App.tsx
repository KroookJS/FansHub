import "swiper/css";
import "swiper/css/effect-cards";

import "./styles.css";
import { SwiperComponent } from "./components/SwiperComponent";
import { NavBarModel } from "./components/NavBarModel";
import { Header } from "./components/Header/Header";


export default function App() {
  return (
    <>
      <div className="container">
        <Header />
        <SwiperComponent />
        <NavBarModel />
      </div>
    </>
  );
}
