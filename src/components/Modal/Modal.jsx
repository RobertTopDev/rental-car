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
} from "./Modal.styled";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    margin: "24px",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "14px",
    padding: "4rem",
    width: "54rem",
    height: "75.2rem",
  },
};

// eslint-disable-next-line no-unused-vars
function ModalPopUp({ items }) {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <CardBtn type="button" onClick={openModal}>
        Learn More
      </CardBtn>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
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
                    <span>{items.address}</span>
                    <span> | Id: {items.id}</span>
                    <span> | Year: {items.year}</span>
                    <span> | Type: {items.type}</span>
                  </div>
                  <div>
                    <span>Fuel Consumption: {items.fuelConsumption}</span>
                    <span> | Engine Size: {items.engineSize}</span>
                  </div>
                </div>
              </ModalTitleContainer>
              <p>{items.description}</p>
            </ModalTitleDescrContainer>
            <div>
              <p>Accessories and functionalities:</p>
              <div>
                {items.accessories.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
            <div>
              <div>
                <p>Rental Conditions: </p>
                <div>{items.rentalConditions}</div>
              </div>
              <span>Mileage: {items.mileage}</span>
              <span>Price: {items.price}</span>
            </div>
            <div>
              <ModalBtn>Rent A Car</ModalBtn>
            </div>
          </ModalTextContainer>
        </ModalWrapper>
      </Modal>
    </>
  );
}

export default ModalPopUp;
