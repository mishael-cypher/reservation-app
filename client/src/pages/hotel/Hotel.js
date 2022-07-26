import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import MailList from "../../components/mailList/MailList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import useFetch from "../../hooks/useFetch";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const Hotel = () => {
  const location = useLocation();
  //Split the path using "/"
  const id = location.pathname.split("/")[2];
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const { data, loading, error } = useFetch(`/hotels/find/${id}`);
  

  return (
    <div>
      <Navbar />
      <Header type="list" />
      {loading ? (
        "Loading please wait"
      ) : (
        <div className="hotelContainer">
          <div className="hotelWrapper">
            <button className="bookNow">Reserve or Book Now!</button>
            <h1 className="hotelTitle">{data.name}</h1>
            <div className="hotelAddress">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{data.address}</span>
            </div>
            <span className="hotelDistance">
              Excellent location - {data.distance}m from center
            </span>
            <span className="hotelPriceHighlight">
              Book a stay over ${data.cheapestPrice} at this propertyand get a free airport taxi
            </span>
            <div className="hotelImages"></div>
            <div className="hotelDetails">
              <div className="hotelDetailsTexts">
                <h1 className="hotelTitle">{data.title}</h1>
                <p className="hotelDesc">
                {data.desc}
                </p>
              </div>
              <div className="hotelDetailsPrice">
                <h1>Perfect for s 9-night stay!</h1>
                <span>
                  Located in the real heart of krakow, this property has an
                  excellent location score of 9.8!
                </span>
                <h2>
                  <b>$945</b> (9 nights)
                </h2>
                <button>Reserve or Book Now!</button>
              </div>
            </div>
          </div>
          <MailList />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Hotel;
