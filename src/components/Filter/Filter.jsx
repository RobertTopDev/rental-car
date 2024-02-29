import makesData from "../../../makes.json";
import { v4 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {
  setBrandFilter,
  setMileageRangeFilter,
  setPriceFilter,
} from "../../redux/cars/slice";
import {
  FormBtn,
  FormLabel,
  FormWrapper,
  OptionWrapper,
  FormInputLeft,
  FormInputRight,
  SelectInput,
  SelectedOption,
  SelectedOptionText,
  FormInputMileageWrapper,
  ArrowIconDown,
  ArrowIconUp,
} from "./Filter.styled";
import { fetchAllCars } from "../../redux/cars/operations";
import { toast } from "react-toastify";

// eslint-disable-next-line react/prop-types
function Filter({ handlePage, setDisplayedCars, setFilteredSearch }) {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [mileageFrom, setMileageFrom] = useState("");
  const [mileageTo, setMileageTo] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenPrice, setIsOpenPrice] = useState(false);

  const dispatch = useDispatch();

  const generatePriceOptions = () => {
    const options = [];

    for (let price = 10; price <= 250; price += 10) {
      options.push(
        <SelectedOptionText
          key={uuid()}
          onClick={() => handleOptionPriceClick(price)}
        >
          {price} $
        </SelectedOptionText>
      );
    }

    return options;
  };

  const handleOptionClick = (brand) => {
    setSelectedBrand(brand);
    setIsOpen(false);
  };

  const handleOptionPriceClick = (price) => {
    setSelectedPrice(price);
    setIsOpenPrice(false);
  };

  async function handleSubmit(e) {
    e.preventDefault();

    if (
      selectedBrand.length === 0 &&
      !selectedPrice &&
      mileageFrom.length === 0 &&
      mileageTo.length === 0
    ) {
      toast.warning(
        "Please choose a brand, price, or mileage range to refine your search.",
        {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "light",
        }
      );

      return;
    }

    // console.log(selectedBrand.length);
    // console.log(!selectedPrice);
    // console.log(mileageFrom.length);
    // console.log(mileageTo.length);

    const filters = {
      brand: selectedBrand,
      // price: selectedPrice,
      price: selectedPrice || "250",
      mileage: {
        // from: mileageFrom,
        // to: mileageTo,
        from: mileageFrom || "0",
        to: mileageTo || "15000",
      },
    };

    const allCarsResponse = await dispatch(fetchAllCars());
    setDisplayedCars(allCarsResponse.payload);

    setFilteredSearch(true);

    // if (selectedPrice === "") {
    //   setSelectedPrice("250");
    // }

    dispatch(setBrandFilter(filters.brand));
    dispatch(setPriceFilter(filters.price));
    dispatch(
      setMileageRangeFilter({
        min: filters.mileage.from,
        max: filters.mileage.to,
      })
    );

    handlePage();

    // setSelectedBrand("");
    // setSelectedPrice("");
    // setMileageFrom("");
    // setMileageTo("");
  }

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <OptionWrapper>
        <FormLabel htmlFor="carBrand">Car brand:</FormLabel>
        <SelectInput onClick={() => setIsOpen(!isOpen)}>
          {selectedBrand || "Enter the text"}
          {isOpen ? <ArrowIconUp /> : <ArrowIconDown />}
        </SelectInput>
        {isOpen && (
          <SelectedOption>
            {makesData.map((option) => (
              <SelectedOptionText
                key={option}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </SelectedOptionText>
            ))}
          </SelectedOption>
        )}
      </OptionWrapper>
      <OptionWrapper>
        <FormLabel htmlFor="price">Price / 1 hour</FormLabel>
        <SelectInput onClick={() => setIsOpenPrice(!isOpenPrice)}>
          {selectedPrice || "To $"}
          {isOpenPrice ? <ArrowIconUp /> : <ArrowIconDown />}
        </SelectInput>
        {isOpenPrice && (
          <SelectedOption>{generatePriceOptions()}</SelectedOption>
        )}
      </OptionWrapper>
      <OptionWrapper>
        <FormLabel htmlFor="mileage">Car mileage / km</FormLabel>
        <FormInputMileageWrapper>
          <FormInputLeft
            type="text"
            placeholder="From"
            value={mileageFrom}
            onChange={(e) => setMileageFrom(e.target.value)}
          />
          <FormInputRight
            type="text"
            placeholder="To"
            value={mileageTo}
            onChange={(e) => setMileageTo(e.target.value)}
          />
        </FormInputMileageWrapper>
      </OptionWrapper>
      <FormBtn type="submit">Search</FormBtn>
    </FormWrapper>
  );
}

export default Filter;
