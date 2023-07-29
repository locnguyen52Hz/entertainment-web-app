import data from "./data";

function Recommend() {
  return (
    <>
        <h4 className="title">Recommended for you</h4>
      <div className="recommended">
        {data.map((item, index) => (
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

export default Recommend;
