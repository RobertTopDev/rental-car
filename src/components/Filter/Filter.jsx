import makesData from "../../../makes.json";
import { v4 as uuid } from "uuid";
import {
  FormBtn,
  FormLabel,
  FormWrapper,
  OptionWrapper,
  FormInputLeft,
  FormInputRight,
  SelectInput,
} from "./Filter.styled";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setBrandFilter,
  setMileageRangeFilter,
  setPriceFilter,
} from "../../redux/cars/slice";

// {
//   makesData.map((option) => (
//     <MenuItem key={uuid()} value={option}>
//       {option}
//     </MenuItem>
//   ));
// }

// eslint-disable-next-line react/prop-types
function Filter({ handleSearch }) {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [mileageFrom, setMileageFrom] = useState("");
  const [mileageTo, setMileageTo] = useState("");

  const dispatch = useDispatch();

  const generatePriceOptions = () => {
    const options = [];

    for (let price = 10; price <= 250; price += 10) {
      options.push(
        <option key={uuid()} value={price}>
          {price} $
        </option>
      );
    }

    return options;
  };

  function handleSubmit(e) {
    e.preventDefault();

    const filters = {
      brand: selectedBrand,
      price: selectedPrice,
      mileage: {
        from: mileageFrom,
        to: mileageTo,
      },
    };

    dispatch(setBrandFilter(selectedBrand));
    dispatch(setPriceFilter(selectedPrice));
    dispatch(
      setMileageRangeFilter({
        min: mileageFrom,
        max: mileageTo,
      })
    );

    handleSearch(filters);

    setSelectedBrand("");
    setSelectedPrice("");
    setMileageFrom("");
    setMileageTo("");
  }

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <OptionWrapper>
        <FormLabel htmlFor="carBrand">Car brand:</FormLabel>
        <SelectInput
          id="carBrand"
          name="carBrand"
          value={selectedBrand}
          onChange={(e) => setSelectedBrand(e.target.value)}
        >
          <option value="" hidden>
            Enter the text
          </option>
          {makesData.map((option) => (
            <option key={uuid()} value={option}>
              {option}
            </option>
          ))}
        </SelectInput>
      </OptionWrapper>
      <OptionWrapper>
        <FormLabel htmlFor="price">Price / 1 hour</FormLabel>
        <SelectInput
          id="price"
          name="price"
          value={selectedPrice}
          onChange={(e) => setSelectedPrice(e.target.value)}
        >
          <option value="" hidden>
            To $
          </option>
          {generatePriceOptions()}
        </SelectInput>
      </OptionWrapper>
      <OptionWrapper>
        <FormLabel htmlFor="mileage">Car mileage / km</FormLabel>
        <div>
          <FormInputLeft
            type="text"
            placeholder="From"
            value={mileageFrom}
            onChange={(e) => setMileageFrom(e.target.value)}
          />
          <FormInputRight
            type="text"
            placeholder="To $"
            value={mileageTo}
            onChange={(e) => setMileageTo(e.target.value)}
          />
        </div>
      </OptionWrapper>
      <FormBtn type="submit">Search</FormBtn>
    </FormWrapper>
  );
}

export default Filter;
