import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/navbar/Header";
import Footer from "../../components/navbar/Footer";
import MailList from "../../components/navbar/MailList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Hotel = () => {
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New york</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this propertyand get a free airport taxi
          </span>
          <div className="hotelImages"></div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
              <p className="hotelDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                vitae nesciunt hic accusantium repellat tempore eaque natus rem
                at molestias beatae unde, nemo iusto architecto sapiente ex
                omnis iste. Explicabo delectus provident, deserunt saepe facere
                repellat nihil exercitationem maiores ad, nemo nostrum? Ut,
                libero. Nisi minima eveniet placeat ad eius?
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for s 9-night stay!</h1>
              <span>
                Located in the real heart of krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2><b>$945</b> (9 nights)</h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
