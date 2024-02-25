import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchAllCars } from "../../redux/cars/operations";
import { v4 as uuid } from "uuid";
import CarItems from "../../components/CarItems/CarItems";
import { FavoritesContainer, FavoritesMenu } from "./Favorites.styled";

function Favorites() {
  const [favoriteCars, setFavoriteCars] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getFavoriteCars() {
      try {
        const allCars = await dispatch(fetchAllCars());

        const favoritesFromStorage =
          JSON.parse(localStorage.getItem("favorites")) || [];

        const favoriteCarsList = allCars.payload.filter((car) =>
          favoritesFromStorage.includes(car.id)
        );

        setFavoriteCars(favoriteCarsList);
      } catch (err) {
        console.log(err.message);
      }
    }

    getFavoriteCars();
  }, [dispatch]);

  return (
    <FavoritesContainer>
      <FavoritesMenu>
        {favoriteCars?.map((items) => {
          return <CarItems key={uuid()} items={items} />;
        })}
      </FavoritesMenu>
    </FavoritesContainer>
  );
}

export default Favorites;
