import { CardBtn } from "../CarItems/CarItems.styled";
import { useState } from "react";
import {
  ModalImg,
  ModalTitle,
  ModalTitleText,
  ModalWrapper,
  ModalTitleWrapper,
  ModalTitleContainer,
  ModalTitleDescrContainer,
  ModalTextContainer,
  ModalBtn,
  ModalDescr,
  ModalDiv,
  ModalDescrText,
  ModalCondition,
  ModalConditionWrapper,
  ModalConditionContainer,
} from "./Modal.styled";
// import Modal from "react-modal";

// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     margin: "24px",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//     borderRadius: "14px",
//     padding: "4rem",
//     width: "54rem",
//     height: "75.2rem",
//     backgroundColor: `${(p) => p.theme.colors.black}`,
//   },
// };

// eslint-disable-next-line no-unused-vars
function ModalPopUp({ items }) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  console.log(items);

  return (
    <>
      <CardBtn type="button" onClick={openModal}>
        Learn More
      </CardBtn>
      <ModalDiv
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        // style={customStyles}
        contentLabel="Example Modal"
      >
        <ModalWrapper>
          <ModalImg src={items.img} alt="" />
          <ModalTextContainer>
            <ModalTitleDescrContainer>
              <ModalTitleContainer>
                <ModalTitleWrapper>
                  <ModalTitle>{items.make}</ModalTitle>
                  <ModalTitleText>, {items.year}</ModalTitleText>
                </ModalTitleWrapper>
                <div>
                  <div>
                    <ModalDescr>{items.address}</ModalDescr>
                    <ModalDescr> | Id: {items.id}</ModalDescr>
                    <ModalDescr> | Year: {items.year}</ModalDescr>
                    <ModalDescr> | Type: {items.type}</ModalDescr>
                  </div>
                  <div>
                    <ModalDescr>
                      Fuel Consumption: {items.fuelConsumption}
                    </ModalDescr>
                    <ModalDescr> | Engine Size: {items.engineSize}</ModalDescr>
                  </div>
                </div>
              </ModalTitleContainer>
              <ModalDescrText>{items.description}</ModalDescrText>
            </ModalTitleDescrContainer>
            <div>
              <ModalDescrText style={{ fontFamily: "500" }}>
                Accessories and functionalities:
              </ModalDescrText>
              <div>
                {items.accessories.map((item, index) => (
                  <ModalDescr key={item}>
                    {item}
                    {index !== items.accessories.length - 1 && <span> | </span>}
                  </ModalDescr>
                ))}
              </div>
            </div>
            <div>
              <ModalConditionContainer>
                <ModalDescrText style={{ fontFamily: "500" }}>
                  Rental Conditions:{" "}
                </ModalDescrText>
                <ModalConditionWrapper>
                  {items.rentalConditions
                    .split("\n")
                    .map((condition, index) => (
                      <ModalCondition key={index}>
                        {condition.trim()}
                      </ModalCondition>
                    ))}
                </ModalConditionWrapper>
              </ModalConditionContainer>
              <span>Mileage: {items.mileage}</span>
              <span>Price: {items.price}</span>
            </div>
            <div>
              <ModalBtn>Rent A Car</ModalBtn>
            </div>
          </ModalTextContainer>
        </ModalWrapper>
      </ModalDiv>
    </>
  );
}

export default ModalPopUp;
