import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square200/295616483.webp?k=51ab457aa5d194680f5a73e38c3de01efe75363b18952aff3f53501b3206e228&o=&s=1"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square200/295616483.webp?k=51ab457aa5d194680f5a73e38c3de01efe75363b18952aff3f53501b3206e228&o=&s=1"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Austin</h1>
          <h2>523 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square200/295616483.webp?k=51ab457aa5d194680f5a73e38c3de01efe75363b18952aff3f53501b3206e228&o=&s=1"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Reno</h1>
          <h2>533 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square200/295616483.webp?k=51ab457aa5d194680f5a73e38c3de01efe75363b18952aff3f53501b3206e228&o=&s=1"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Dubai</h1>
          <h2>155 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
