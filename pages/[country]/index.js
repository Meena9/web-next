import React from "react";
import axios from "axios";
import Thumbnail from "../conponent/Thumbnail";
import { useState } from "react";
const Country = ({ data, country }) => {
  const [count, setCount] = useState(0);
  // const handleDecrement = () => {
  //   if (count > 0) {
  //     setCount(count - 1);
  //   }
  // };
  // const handleIncrement = () => {
  //   setCount(count + 1);
  // };
  console.log("data", data);
  const renderCountry = () => {
    return data.map((ele, index) => {
      const { show } = ele;
      console.log("show", show);

      return (
        <div className="home">
          <li key={index}>
            <Thumbnail
              imageUrl={(show.image && show.image.medium) || undefined}
              caption={show.name}
              showId={show.id}
              country={country}
            />
          </li>
          <style jsx>{`
            .home {
              width: 100%;
            }
          `}</style>
        </div>
      );
    });
  };
  return (
    <ul>
      {/* <div>{count}</div>
      <div>
        <button type="button" className="button" onClick={handleIncrement}>
          {" "}
          Increament
        </button>
      </div>
      <div>
        <button type="button" className="button" onClick={handleDecrement}>
          {" "}
          Decrement
        </button>
      </div> */}
      {renderCountry()}
      <style jsx>{`
        .button {
          margin: 10px;
          padding: 10px;
        }
      `}</style>
    </ul>
  );
};
Country.getInitialProps = async (context) => {
  console.log("context", context);
  const contry = context.query.country || "US";
  const response = await axios.get(
    `http://api.tvmaze.com/schedule?country=${contry}&date=2014-12-01`
  );
  console.log("response", response.data);

  return {
    data: response.data,
    country: contry,
  };
};
export default Country;
