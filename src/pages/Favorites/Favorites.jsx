import { useSelector } from "react-redux";
import { selectFavoriteCars } from "../../redux/cars/selectors";

function Favorites() {
  const favoriteCars = useSelector(selectFavoriteCars);

  console.log(favoriteCars);

  return (
    <div>
      {favoriteCars?.map((car) => (
        <div key={car.id}>
          <p>{car.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Favorites;
