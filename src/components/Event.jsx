import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Style/Event.css";

import event1 from "../images/event-images/1.png";
import event2 from "../images/event-images/2.png";
import event3 from "../images/event-images/3.png";
import event4 from "../images/event-images/1.png";

const eventPostersLeft = [
  { id: 1, image: event1, alt: "Event 1", title: "Tech Conference" },
  { id: 2, image: event2, alt: "Event 2", title: "Startup Meetup" },
];

const eventPostersRight = [
  { id: 3, image: event3, alt: "Event 3", title: "AI Workshop" },
  { id: 4, image: event4, alt: "Event 4", title: "Cyber Security Summit" },
];

const UpcomingEvents = () => {
  const navigate = useNavigate();

  const handleEventClick = (eventId) => {
    navigate(`/event/${eventId}`);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 1 } },
      { breakpoint: 992, settings: { slidesToShow: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };


    return (
      <div className="upcoming-events">
        <div> {/* Limiting width inside container-fluid */}
          <div className="row justify-content-between">
            {/* Left Event Carousel */}
            <div className="col-lg-5 col-md-6 col-sm-12 mb-4">
              <div className="event-box p-3">
                <h3 className="text-center event-titles">Current Events</h3>
                <Slider {...settings}>
                  {eventPostersLeft.map((event) => (
                    <div 
                      key={event.id} 
                      className="event-card" 
                      onClick={() => handleEventClick(event.id)}
                    >
                      <img 
                        src={event.image} 
                        alt={event.alt} 
                        className="event-image img-fluid" 
                      />
                      <p className="event-caption">{event.title}</p>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
    
            {/* Right Event Carousel */}
            <div className="col-lg-5 col-md-6 col-sm-12 mb-4">
              <div className="event-box p-3">
                <h3 className="text-center event-titles">Upcoming Events</h3>
                <Slider {...settings}>
                  {eventPostersRight.map((event) => (
                    <div 
                      key={event.id} 
                      className="event-card" 
                      onClick={() => handleEventClick(event.id)}
                    >
                      <img 
                        src={event.image} 
                        alt={event.alt} 
                        className="event-image img-fluid" 
                      />
                      <p className="event-caption">{event.title}</p>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
    

};

export default UpcomingEvents;
