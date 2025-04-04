import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import OurParish from "./components/OurParish";
import Anbiyangal from "./components/Anbiyangal";
import SpecialGallery from "./components/Videos";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Footer from "./components/Footer";
import ImageCategory from "./components/ImageCategory";
import Videos from "./components/Videos";
import AdminLogin from "./components/AdminLogin";
import AdminAddImages from "./components/AdminAddImages";
import Feb from "./components/All-images/Feb";
import March from "./components/All-images/March";
import April from "./components/All-images/April";
import June from "./components/All-images/June";
import July from "./components/All-images/July";
import August from "./components/All-images/August";
import September from "./components/All-images/September";
import October from "./components/All-images/October";
import December from "./components/All-images/December";
import November from "./components/All-images/November";
import January from "./components/All-images/January";
import May from "./components/All-images/May";

import Festival from "./components/Festival";
import Body from "./components/Body";
import One from "./components/participative-structures/One";
import Two from "./components/participative-structures/Two";
import Three from "./components/participative-structures/Three";
import Four from "./components/participative-structures/Four";
import Five from "./components/participative-structures/Five";
import Service from "./components/Service";
import HistoryDetails from "./components/HistoryDetails";
import About from "./components/About";
import OldPriest from "./components/OldPriest";
import AnbiyamCoordination from "./components/AnbiyamCoordination";


function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin-product" element={<AdminAddImages />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/ourparish" element={<OurParish />} />
        <Route path="/anbiyam" element={<Anbiyangal />} />
        <Route path="/special-gallery" element={<SpecialGallery />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/images-category" element={<ImageCategory />} />
        <Route path="/jan" element={<January />} />
        <Route path="/feb" element={<Feb />} />
        <Route path="/march" element={<March />} />
        <Route path="/april" element={<April />} />
        <Route path="/may" element={<May />} />
        <Route path="/june" element={<June />} />
        <Route path="/july" element={<July />} />
        <Route path="/august" element={<August />} />
        <Route path="/sept" element={<September />} />
        <Route path="/oct" element={<October />} />
        <Route path="/nov" element={<November/>} />
        <Route path="/dec" element={<December/>} />
        <Route path="/festival" element={<Festival />} />
        <Route path="/gallery" element={<Body />} />
        <Route path="/one" element={<One />} />
        <Route path="/two" element={<Two />} />
        <Route path="/three" element={<Three />} />
        <Route path="/four" element={<Four />} />
        <Route path="/five" element={<Five />} />
        <Route path="/service" element={<Service />} />
        <Route path="/history-details" element={<HistoryDetails />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/old-priest" element={<OldPriest />}/>
        <Route path="/anbiyam-co" element={<AnbiyamCoordination />}/>

      </Routes>
      <Footer />
    </>
  );
}

export default App;


