import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=Awka,Nnewi,Agulu"
  );
  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/square200/295616483.webp?k=51ab457aa5d194680f5a73e38c3de01efe75363b18952aff3f53501b3206e228&o=&s=1"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Awka</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/square200/295616483.webp?k=51ab457aa5d194680f5a73e38c3de01efe75363b18952aff3f53501b3206e228&o=&s=1"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Nnewi</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/square200/295616483.webp?k=51ab457aa5d194680f5a73e38c3de01efe75363b18952aff3f53501b3206e228&o=&s=1"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Agulu</h1>
              <h2>{data[2]} properties</h2>
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
        </>
      )}
    </div>
  );
};

export default Featured;
