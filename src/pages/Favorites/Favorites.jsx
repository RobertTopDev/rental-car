import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchAllCars } from "../../redux/cars/operations";
import { v4 as uuid } from "uuid";
import CarItems from "../../components/CarItems/CarItems";
import { FavoritesContainer, FavoritesMenu } from "./Favorites.styled";
import { Helmet, HelmetProvider } from "react-helmet-async";

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
    <>
      <HelmetProvider>
        <Helmet>
          <title>Cruise Wheels - Your Favorite Cars</title>
          <meta
            name="description"
            content="Discover and explore your favorite cars with Cruise Wheels. View and rent stylish and comfortable vehicles that make every journey unforgettable."
          />
          <meta
            name="keywords"
            content="favorite cars, car rental, stylish cars, comfortable journeys, Cruise Wheels, premium rental services"
          />
        </Helmet>
      </HelmetProvider>
      <FavoritesContainer>
        <FavoritesMenu>
          {favoriteCars?.map((items) => {
            return <CarItems key={uuid()} items={items} />;
          })}
        </FavoritesMenu>
      </FavoritesContainer>
    </>
  );
}

export default Favorites;
