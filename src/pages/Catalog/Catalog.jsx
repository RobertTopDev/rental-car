import { useDispatch, useSelector } from "react-redux";
import { selectCars, selectFiltersCars } from "../../redux/cars/selectors";
import { useEffect, useState } from "react";
import { fetchAllCars, fetchCars } from "../../redux/cars/operations";
// import Loader from "../../components/Loader/Loader";
import { Helmet, HelmetProvider } from "react-helmet-async";
import CarItems from "../../components/CarItems/CarItems";
import { CarsMenu, CatalogContainer, NoMatchCar } from "./Catalog.styled";
import Filter from "../../components/Filter/Filter";
import LoadMore from "../../components/LoadMore/LoadMore";
import { v4 as uuid } from "uuid";
import { toggleFavorite } from "../../redux/cars/slice";
// import {
//   setBrandFilter,
//   setPriceFilter,
//   setMileageRangeFilter,
// } from "../../redux/cars/slice";

function Catalog() {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);

  const [initialLoading, setInitialLoading] = useState(true);
  const [page, setPage] = useState(1);
  // const [filterBrand, setFilterBrand] = useState("");
  // const [filterPrice, setFilterPrice] = useState("");
  // const [filterMileageRange, setFilterMileageRange] = useState("");
  const [showLoadBtn, setShowLoadBtn] = useState(true);
  const [displayedCars, setDisplayedCars] = useState([]);

  const filteredCars = useSelector(selectFiltersCars);

  async function handleFavoriteToggle(carId) {
    // await dispatch(toggleFavorite(carId));
  }

  function onLoadMoreClick() {
    setPage((page) => page + 1);
  }

  function handlePage() {
    setPage(1);
  }

  useEffect(() => {
    async function fetchedData() {
      try {
        const allCarsResponse = await dispatch(fetchAllCars());
        setDisplayedCars(allCarsResponse.payload);

        await dispatch(fetchCars(page)).unwrap();
      } catch (error) {
        console.log(error.message);
      } finally {
        setInitialLoading(false);
      }
    }
    fetchedData();
  }, [dispatch, page]);

  function filteredByCars() {
    const filtered = displayedCars.filter(
      (item) =>
        item.make === filteredCars.brand &&
        parseInt(item.rentalPrice.replace("$", "")) <= filteredCars.price &&
        item.mileage > filteredCars.mileageRange.min &&
        item.mileage <= filteredCars.mileageRange.max
    );
    return filtered;
  }

  const visibleCars = filteredByCars();

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Cruise Wheels - Explore the Catalog</title>
          <meta
            name="description"
            content="Browse through our diverse catalog of stylish and comfortable cars at Cruise Wheels. Find the perfect vehicle for your next adventure and experience the joy of premium car rentals."
          />
          <meta
            name="keywords"
            content="car catalog, car rental, stylish cars, comfortable journeys, Cruise Wheels, premium rental services"
          />
        </Helmet>
      </HelmetProvider>
      <CatalogContainer>
        <Filter handlePage={handlePage} />
        <CarsMenu>
          {visibleCars?.length === 0 && filteredCars?.brand?.length > 0 ? (
            <NoMatchCar>No matching cars found</NoMatchCar>
          ) : visibleCars?.length > 0 ? (
            visibleCars?.map((items) => {
              return (
                <CarItems
                  key={uuid()}
                  items={items}
                  handleFavoriteToggle={handleFavoriteToggle}
                />
              );
            })
          ) : (
            cars?.map((items) => {
              return (
                <CarItems
                  key={uuid()}
                  items={items}
                  handleFavoriteToggle={handleFavoriteToggle}
                />
              );
            })
          )}
        </CarsMenu>
        {showLoadBtn && <LoadMore onLoadMoreClick={onLoadMoreClick} />}
      </CatalogContainer>
    </>
  );
}

export default Catalog;
