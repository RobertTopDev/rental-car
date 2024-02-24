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

// {
//   makesData.map((option) => (
//     <MenuItem key={uuid()} value={option}>
//       {option}
//     </MenuItem>
//   ));
// }

function Filter() {
  const generatePriceOptions = () => {
    const options = [];

    for (let price = 10; price <= 200; price += 10) {
      options.push(
        <option key={uuid()} value={price}>
          {price} $
        </option>
      );
    }

    return options;
  };

  return (
    <FormWrapper>
      <OptionWrapper>
        <FormLabel htmlFor="carBrand">Car brand:</FormLabel>
        <SelectInput id="carBrand" name="carBrand">
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
        <SelectInput id="price" name="price">
          <option value="" hidden>
            To $
          </option>
          {generatePriceOptions()}
        </SelectInput>
      </OptionWrapper>
      <OptionWrapper>
        <FormLabel htmlFor="mileage">Car mileage / km</FormLabel>
        <div>
          <FormInputLeft type="text" placeholder="From" />
          <FormInputRight type="text" placeholder="To $" />
        </div>
      </OptionWrapper>
      <FormBtn>Search</FormBtn>
    </FormWrapper>
  );
}

export default Filter;
