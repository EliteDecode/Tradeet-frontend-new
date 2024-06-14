import Card from "./Card.jsx";
import Categories from "./Categories.jsx";
import Faqs from "./Faqs.jsx";
import Foundation from "./Foundation.jsx";
import ImageSlider from "./ImageSlider.jsx";
import PopularItems from "./PopularItems.jsx";
import PromotionSales from "./PromotionSales.jsx";
import TodayDeal from "./TodayDeal.jsx";

const Home = () => {
  return (
    <div>
      <Categories />
      <ImageSlider />
      <Card />
      <PromotionSales />
      <TodayDeal />
      <PopularItems />
      <Foundation />
      <Faqs />
    </div>
  );
};

export default Home;