import { useEffect, useState } from "react";
import defaultCar from "../../../public/images/default-car.jpg";
import {
  CarImg,
  CarItem,
  CartItemTitleWrapper,
  CartItemTitle,
  CartItemYear,
  CartItemTitleWrap,
  CardInfoWrapper,
  CardInfoContainer,
  CardBtn,
  CardItemTextDescr,
  EmptyHeartIcon,
  FavoriteHeartIcon,
  CarImgWrapper,
  HeartIconWrapper,
} from "./CarItems.styled";
import ModalPopUp from "../Modal/Modal";
// import { useDispatch } from "react-redux";
// import { toggleFavorite } from "../../redux/cars/slice";

/* eslint-disable react/prop-types */
function CarItems({ items, handleFavoriteToggle }) {
  const [favorite, setFavorite] = useState(false);
  // const dispatch = useDispatch();

  useEffect(() => {
    const favoritesFromStorage =
      JSON.parse(localStorage.getItem("favorites")) || [];

    const isFavorite = favoritesFromStorage.includes(items.id);

    setFavorite(isFavorite);
  }, [items.id]);

  function handleFavoriteBtn(id) {
    const favoritesFromStorage =
      JSON.parse(localStorage.getItem("favorites")) || [];

    const index = favoritesFromStorage.indexOf(id);

    if (index !== -1) {
      favoritesFromStorage.splice(index, 1);
    } else {
      favoritesFromStorage.push(id);
    }

    localStorage.setItem("favorites", JSON.stringify(favoritesFromStorage));

    setFavorite((prevState) => !prevState);

    // handleFavoriteToggle(items?.id);
  }

  return (
    <CarItem>
      <CarImgWrapper>
        <CarImg
          src={
            items.img
              ? items.img
              : items.photoLink
              ? items.photoLink
              : defaultCar
          }
          alt={items.make}
        />
        <HeartIconWrapper onClick={() => handleFavoriteBtn(items.id)}>
          {favorite ? <FavoriteHeartIcon /> : <EmptyHeartIcon />}
        </HeartIconWrapper>
      </CarImgWrapper>
      <CardInfoContainer>
        <CardInfoWrapper>
          <CartItemTitleWrapper>
            <CartItemTitleWrap>
              <CartItemTitle>{items.make}</CartItemTitle>
              <CartItemYear>, {items.year}</CartItemYear>
            </CartItemTitleWrap>
            <CartItemYear>{items.rentalPrice}</CartItemYear>
          </CartItemTitleWrapper>
          <div>
            <div>
              <CardItemTextDescr>{items.address}</CardItemTextDescr>
              <CardItemTextDescr> | {items.rentalCompany}</CardItemTextDescr>
            </div>
            <div>
              <CardItemTextDescr>{items.type}</CardItemTextDescr>
              <CardItemTextDescr> | {items.model}</CardItemTextDescr>
              <CardItemTextDescr>
                {" "}
                | miles: {parseInt(items.mileage).toLocaleString()}
              </CardItemTextDescr>
            </div>
          </div>
        </CardInfoWrapper>
        <ModalPopUp items={items} />
      </CardInfoContainer>
    </CarItem>
  );
}

export default CarItems;
