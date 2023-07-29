import data from "./data";

function Trending() {
  let trening = [];
  for (let i = 0; i < data.length; i++) {
    if (i < 5) {
      let movie = data[i];
      trening.push(movie);
    }
  }
  console.log(trening);

  return (
    <>
      <div className="trending-wrap">
        <h4 className="title">Trending</h4>
        <div className="trending-content-wrap">
          {trening.map((item, index) => (
            <div key={index} className="content">
              <img className="trending-img" src={item.img} />
              <div className="content-footer">
                <p>{item.type}</p>
                <h4>{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Trending;
