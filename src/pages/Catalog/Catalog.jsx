import { useDispatch, useSelector } from "react-redux";
import { selectCars } from "../../redux/cars/selectors";
import { useEffect, useState } from "react";
import { fetchCars } from "../../redux/cars/operations";
import Loader from "../../components/Loader/Loader";
import CarItems from "../../components/CarItems/CarItems";
import { CarsMenu, CatalogContainer } from "./Catalog.styled";
import Filter from "../../components/Filter/Filter";
import LoadMore from "../../components/LoadMore/LoadMore";

function Catalog() {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const [initialLoading, setInitialLoading] = useState(true);
  const [page, setPage] = useState(1);

  function onLoadMoreClick() {
    setPage((page) => page + 1);
  }

  useEffect(() => {
    try {
      dispatch(fetchCars(page))
        .unwrap()
        .catch((error) => {
          console.error("Error fetching cars:", error);
        })
        .finally(() => {
          setInitialLoading(false);
        });
    } catch (error) {
      console.log(error.message);
    }
  }, [dispatch, page]);

  return initialLoading ? (
    <Loader />
  ) : (
    <CatalogContainer>
      <Filter />
      <CarsMenu>
        {cars.map((items) => {
          return <CarItems key={items.id} items={items} />;
        })}
      </CarsMenu>
      <LoadMore onLoadMoreClick={onLoadMoreClick} />
    </CatalogContainer>
  );
}

export default Catalog;
