const Dish = ({ name, url, weight }) => {
  return (
    <div className="dish">
      <div className="dish_image">
        <img src={url} alt="dish image" />
        <div className="dish_info_icon">
          <p>i</p>
        </div>
        <div className="dish_info_weight">
          <p>{weight}</p>
        </div>
      </div>
      <div className="dish_title">
        <h2>{name}</h2>
      </div>
    </div>
  );
};

export default Dish;
