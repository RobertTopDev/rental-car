import { useDispatch, useSelector } from "react-redux";
import { selectCars, selectFiltersCars } from "../../redux/cars/selectors";
import { useEffect, useState } from "react";
import { fetchAllCars, fetchCars } from "../../redux/cars/operations";
import { Helmet, HelmetProvider } from "react-helmet-async";
import CarItems from "../../components/CarItems/CarItems";
import { CarsMenu, CatalogContainer, NoMatchCar } from "./Catalog.styled";
import Filter from "../../components/Filter/Filter";
import LoadMore from "../../components/LoadMore/LoadMore";
import { v4 as uuid } from "uuid";

function Catalog() {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);

  const [initialLoading, setInitialLoading] = useState(true);
  const [page, setPage] = useState(1);
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

  const carsPerPage = 12;

  const totalCarsOnServer = 52;

  const totalCars = Math.ceil(totalCarsOnServer / carsPerPage);

  useEffect(() => {
    async function fetchedData() {
      try {
        const allCarsResponse = await dispatch(fetchAllCars());
        setDisplayedCars(allCarsResponse.payload);

        setShowLoadBtn(page < totalCars);

        await dispatch(fetchCars(page)).unwrap();
      } catch (error) {
        console.log(error.message);
      } finally {
        setInitialLoading(false);
      }
    }
    fetchedData();
  }, [dispatch, page, totalCars]);

  // function filteredByCars() {
  //   const filtered = displayedCars.filter(
  //     (item) =>
  //       item.make === filteredCars.brand &&
  //       parseInt(item.rentalPrice.replace("$", "")) <= filteredCars.price &&
  //       item.mileage > filteredCars.mileageRange.min &&
  //       item.mileage <= filteredCars.mileageRange.max
  //   );

  //   return filtered;
  // }

  // const visibleCars = filteredByCars();

  function filteredByCars() {
    const filtered = displayedCars.filter((item) => {
      const brandCondition =
        !filteredCars.brand || item.make === filteredCars.brand;
      const priceCondition =
        !filteredCars.price ||
        parseInt(item.rentalPrice.replace("$", "")) <= filteredCars.price;
      const mileageCondition =
        !filteredCars.mileageRange ||
        (item.mileage > filteredCars.mileageRange.min &&
          item.mileage <= filteredCars.mileageRange.max);

      return brandCondition && priceCondition && mileageCondition;
    });

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
          {/* {filteredCars.brand || filteredCars.price || filteredCars.mileageRange
            ? visibleCars.length > 0
              ? visibleCars.map((items) => (
                  <CarItems key={uuid()} items={items} />
                ))
              : cars.map((items) => <CarItems key={uuid()} items={items} />)
            : cars.map((items) => <CarItems key={uuid()} items={items} />)} */}
          {/* {(visibleCars?.length === 0 && filteredCars?.brand?.length) > 0 ||
          filteredCars.price.length > 0 ||
          filteredCars.mileageRange.min.length > 0 ||
          filteredCars.mileageRange.max.length > 0 ? (
            <NoMatchCar>No matching cars found</NoMatchCar>
          ) : visibleCars?.length > 0 ? (
            visibleCars?.map((items) => {
              return <CarItems key={uuid()} items={items} />;
            })
          ) : (
            cars?.map((items) => {
              return <CarItems key={uuid()} items={items} />;
            })
          )} */}
          {visibleCars?.length === 0 && filteredCars?.brand?.length > 0 ? (
            <NoMatchCar>No matching cars found</NoMatchCar>
          ) : visibleCars?.length > 0 ? (
            visibleCars?.map((items) => {
              return <CarItems key={uuid()} items={items} />;
            })
          ) : (
            cars?.map((items) => {
              return <CarItems key={uuid()} items={items} />;
            })
          )}
        </CarsMenu>
        {showLoadBtn && <LoadMore onLoadMoreClick={onLoadMoreClick} />}
      </CatalogContainer>
    </>
  );
}

export default Catalog;
