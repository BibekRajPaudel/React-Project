import "./App.css";
import PreNavbar from "./components/PreNavbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Slider from "./components/Slider";
import jsonData from "./data/data.json";
import Offers from "./components/Offers";
import Heading from "./components/Heading";
import StarProduct from "./components/StarProduct";
import HotAccessoriesMenu from "./components/HotAccessoriesMenu";
import HotAccessories from "./components/HotAccessories";
import ProductReviews from "./components/ProductReviews.js";

function App() {
  return (
    <Router>
      <PreNavbar />
      <NavBar />
      <Slider start={jsonData.banner.start} />
      <Offers offer={jsonData.offer} />
      <Heading text="STAR PRODUCTS" />
      <StarProduct starProduct={jsonData.starProduct} />
      <Heading text="HOT ACCESORIES" />
      <HotAccessoriesMenu />

      <Routes>
        <Route
          exact
          path="/music"
          element={
            <HotAccessories
              music={jsonData.hotAccessories.music}
              musicCover={jsonData.hotAccessoriesCover.music}
            />
          }
        />
        <Route
          exact
          path="/smartDevice"
          element={
            <HotAccessories
              smartDevice={jsonData.hotAccessories.smartDevice}
              smartDeviceCover={jsonData.hotAccessoriesCover.smartDevice}
            />
          }
        />
        <Route
          exact
          path="/home"
          element={
            <HotAccessories
              home={jsonData.hotAccessories.home}
              homeCover={jsonData.hotAccessoriesCover.home}
            />
          }
        />

        <Route
          exact
          path="/lifestyle"
          element={
            <HotAccessories
              lifeStyle={jsonData.hotAccessories.lifeStyle}
              lifeStyleCover={jsonData.hotAccessoriesCover.lifeStyle}
            />
          }
        />
        <Route
          exact
          path="/mobileAccessories"
          element={
            <HotAccessories
              mobileAccessories={jsonData.hotAccessories.mobileAccessories}
              mobileAccessoriesCover={
                jsonData.hotAccessoriesCover.mobileAccessories
              }
            />
          }
        />

      </Routes>
        <Heading text="PRODUCT REVIEWS" />

        <ProductReviews productReviews={jsonData.productReviews} />
    </Router>
  );
}

export default App;
