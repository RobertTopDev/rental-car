import { useState } from "react";
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

/* eslint-disable react/prop-types */
function CarItems({ items }) {
  const [favorite, setFavorite] = useState(false);

  const renderAddress = (fullAddress) => {
    const addressParts = fullAddress.split(",");

    const city = addressParts[addressParts.length - 2]?.trim() || "";
    const country = addressParts[addressParts.length - 1]?.trim() || "";

    return (
      <>
        <CardItemTextDescr>{city}</CardItemTextDescr>
        <CardItemTextDescr> | {country}</CardItemTextDescr>
      </>
    );
  };

  return (
    <CarItem>
      <CarImgWrapper>
        <CarImg src={items.img ? items.img : defaultCar} alt={items.make} />
        <HeartIconWrapper
          onClick={() => setFavorite((prevState) => !prevState)}
        >
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
              <CardItemTextDescr>
                {renderAddress(items.address)}
              </CardItemTextDescr>
              <CardItemTextDescr> | {items.rentalCompany}</CardItemTextDescr>
            </div>
            <div>
              <CardItemTextDescr>{items.type}</CardItemTextDescr>
              <CardItemTextDescr> | {items.model}</CardItemTextDescr>
              <CardItemTextDescr> | miles: {items.mileage}</CardItemTextDescr>
            </div>
          </div>
        </CardInfoWrapper>
        <CardBtn>Learn More</CardBtn>
      </CardInfoContainer>
    </CarItem>
  );
}

export default CarItems;
