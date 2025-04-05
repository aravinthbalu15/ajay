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
import TKOne from "./components/participative-structures/tk/TKOne";
import TKTwo from "./components/participative-structures/tk/TKTwo";
import TKThree from "./components/participative-structures/tk/Three";
import OAOne from "./components/participative-structures/oa/Eight";
import OATwo from "./components/participative-structures/oa/OATwo";
import OAThree from "./components/participative-structures/oa/OAThree";
import OAFour from "./components/participative-structures/oa/OAFour";
import OAFive from "./components/participative-structures/oa/OAFive";
import OASix from "./components/participative-structures/oa/OASix";
import OASeven from "./components/participative-structures/oa/OASeven";
import SAOne from "./components/participative-structures/sa/SAOne";
import SATwo from "./components/participative-structures/sa/SATwo";
import SAThree from "./components/participative-structures/sa/SAThree";
import SAFour from "./components/participative-structures/sa/SAFour";
import VAOne from "./components/participative-structures/va/VAOne";
import VATwo from "./components/participative-structures/va/VATwo";
import VAThree from "./components/participative-structures/va/VAThree";
import HeartConvent from "./components/HeartConvent";

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
        {/* Home */}
        <Route path="/heart-convent" element={<HeartConvent />} />
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

        {/* திருத்தூதர்கள் சங்கங்கள் */}
        <Route path="/மரியாவின் சேனை" element={<TKOne />}/>
        <Route path="/வின்சென்ட் தெ பால் சங்கம்" element={<TKTwo />}/>
        <Route path="/கத்தோலிக்க சேவா சங்கம்" element={<TKThree/>}/>

        {/* உருவாக்க அமைப்புகள் */}
        <Route path="/பாலர் சபை" element={<OAOne />}/>
        <Route path="/சிறார் இயக்கம்" element={<OATwo />}/>
        <Route path="/இளம் கிறித்தவ மாணாக்கர் இயக்கம்" element={<OAThree/>}/>
        <Route path="/இளையோர் இயக்கம் ( ஆண்கள்) " element={<OAFour/>}/>
        <Route path="/இளையோர் இயக்கம் ( பெண்கள்)" element={<OAFive/>}/>
        <Route path="/பெண்கள் இயக்கம்" element={<OASix/>}/>
        <Route path="/விவிலியப் பணிக்குழு" element={<OASeven/>}/>

        {/* சேவை அமைப்புகள்  */}
        <Route path="/பெண்கள் கிராம முன்னேற்றச் சங்கம்" element={<SAOne />}/>
         <Route path="/கோல்பிங்  இயக்கம்" element={<SATwo/>}/>
          <Route path="/கைகள் தன்னம் பிக்கை இயக்கம்" element={< SAThree/>}/>
            <Route path="/அடித்தள முழுவளர்ச்சி சங்கம்" element={<SAFour />}/>


              <Route path="/வழிபாட்டுக் குழு" element={< VAOne/>}/>
                <Route path="/பாடகர் குழு" element={< VATwo/>}/>
                  <Route path="/பீடச்சிறார்" element={< VAThree/>}/>



      </Routes>
      <Footer />
    </>
  );
}

export default App;


