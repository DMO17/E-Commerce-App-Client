import { Announcement } from "../components/Announcement";
import { Categories } from "../components/Home/Categories";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { Newsletter } from "../components/Newsletter";
import { Products } from "../components/Products";
import { Slider } from "../components/Home/Slider";
import { Fragment } from "react";

export const Home = () => {
  return (
    <Fragment>
      <Announcement />
      <NavBar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </Fragment>
  );
};
