import mealsImage from "../../assets/meals.jpg";
const Header = (props) => {
  return (
    <div>
      <header>
        <h1>React Meals</h1>
        <button>Cart</button>
      </header>
      <div>
        <img src={mealsImage} alt="table full of food" />
      </div>
    </div>
  );
};

export default Header;
