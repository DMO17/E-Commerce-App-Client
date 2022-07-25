import { Categories } from "../components/Home/Categories";
import { Footer } from "../components/Footer";
import { Newsletter } from "../components/Newsletter";
import { Products } from "../components/Products";
import { Slider } from "../components/Home/Slider";
import { Fragment } from "react";

export const Home = () => {
  return (
    <Fragment>
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </Fragment>
  );
};
