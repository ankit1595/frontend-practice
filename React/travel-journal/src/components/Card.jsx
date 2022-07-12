export default function Card({ data }) {
  //   console.log(props);
  return (
    <div className="card">
      <img className="card--img" src={data.imageUrl} alt="" />
      <div className="card--details">
        <span className="location">
          <i
            style={{ color: "#f55a5a" }}
            className="fa-solid fa-location-dot"
          ></i>
          {data.location.toUpperCase()}
        </span>

        <a className="maps-url" href={data.googleMapsUrl}>
          View on Google Maps
        </a>

        <h1 className="card--title">{data.title} </h1>
        <small className="date">
          {data.startDate} - {data.endDate}
        </small>
        <p className="description">{data.description}</p>
      </div>
    </div>
  );
}
