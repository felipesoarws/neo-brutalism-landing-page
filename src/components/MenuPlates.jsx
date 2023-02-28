const MenuPlates = ({ name, url }) => {
  return (
    <div className="menu_plate">
      <div className="menu_plate_title">
        <h1>{name}</h1>
      </div>
      <div className="menu_plate_img">
        <img src={url} alt="image" />
      </div>
    </div>
  );
};

export default MenuPlates;
