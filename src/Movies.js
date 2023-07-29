import data from "./data";

function Movies() {
  const moviesList = data.filter((item) => item.type === "Movies");

  return (
    <>
        <h4 className="title">Movies</h4>
      <div className="movies">
        {moviesList.map((item, index) => (
          <div className="item" key={index}>
            <img src={item.img} />
            <div className="item-footer">
              <p>{item.type}</p>
              <h4> {item.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default Movies;
