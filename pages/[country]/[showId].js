import axios from "axios";
import Cast from "../conponent/Cast";
const Show = ({ data }) => {
  console.log("datat", data);
  const { image, summary, _embedded, name } = data;
  return (
    <div className="home">
      <img src={image.medium} />
      show this {name}
      <div>{summary}</div>
      <Cast cast={_embedded.cast} />
      <style jsx>
        {`
          .home {
            width: 100%;
          }
        `}
      </style>
    </div>
  );
};

Show.getInitialProps = async (context) => {
  console.log("context", context);
  const showId = context.query.showId;
  const response = await axios.get(
    `http://api.tvmaze.com/shows/${showId}?embed=cast`
  );
  console.log("data show", response);

  return {
    data: response.data,
  };
};
export default Show;
