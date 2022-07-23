import { Announcement } from "../components/Announcement";
import { NavBar } from "../components/NavBar";
import Slider from "../components/Slider";

export const Home = () => {
  return (
    <div>
      <Announcement />
      <NavBar />
      <Slider />
    </div>
  );
};
